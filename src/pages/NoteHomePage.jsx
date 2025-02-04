import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/network-data";
import { LocaleContext } from "../contexts/LocaleContext";

function NoteHomePage({ logout }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialKeyword = searchParams.get("keyword") || "";

    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState(initialKeyword);
    const [loading, setLoading] = useState(true);

    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    useEffect(() => {
        fetchNotes();
    }, [keyword]);

    const fetchNotes = async () => {
        setLoading(true);
        try {
            const { data } = await getActiveNotes();
            setNotes(data);
        } catch (error) {
            console.error("Failed to fetch notes:", error);
        }
        setLoading(false);
    };

    const handleKeywordChange = (newKeyword) => {
        setKeyword(newKeyword);
        setSearchParams(newKeyword ? { keyword: newKeyword } : {});
    };

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-8">
                    {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
                </h1>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {locale === "id" ? "Catatan Aktif" : "Active Notes"}
                    </h2>
                    <Navigation currentPage="home" logout={logout} />
                </div>
                <SearchBar keyword={keyword} keywordChange={handleKeywordChange} />
                
                {loading ? (
                    <LoadingIndicator />
                ) : (
                    <NoteList notes={filteredNotes} />
                )}
            </div>
        </div>
    );
}

function LoadingIndicator() {
    return (
        <div className="flex justify-center items-center py-6">
            <div className="w-16 h-16 border-t-4 border-violet-500 border-solid rounded-full animate-spin"></div>
        </div>
    );
}

NoteHomePage.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default NoteHomePage;
