import React from "react";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

function NoteHomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <NoteHomePageChild defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class NoteHomePageChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || "",
        };

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            };
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <div>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-center mb-8">Aplikasi Catatan</h1>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-100">Catatan Aktif</h1>
                        <Navigation currentPage="home" />
                    </div>
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                    <NoteList notes={filteredNotes} />
                </div>
            </div>
        );
    }
}

NoteHomePageChild.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired
}

export default NoteHomePage;