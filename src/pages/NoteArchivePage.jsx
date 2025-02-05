import React, { useState, useEffect, useContext } from "react";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";

function NoteArchivePage({ logout, name }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialKeyword = searchParams.get("keyword") || "";

    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState(initialKeyword);
    const [loading, setLoading] = useState(true); // State loading untuk indikator

    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    useEffect(() => {
        fetchNotes();
    }, [keyword]); // Memperbarui catatan saat keyword berubah

    const fetchNotes = async () => {
        setLoading(true); // Set loading true saat mengambil data
        const { data } = await getArchivedNotes();
        setNotes(data || []); // Pastikan data yang diterima tidak null
        setLoading(false); // Set loading false setelah data selesai dimuat
    };

    const handleKeywordChange = (keyword) => {
        setKeyword(keyword);

        if (keyword) {
            setSearchParams({ keyword });
        } else {
            setSearchParams({});
        }
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
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {locale === "id" ? "Catatan Arsip" : "Archive Notes"}
                    </h1>
                    <Navigation currentPage="archive" logout={logout} name={name} />
                </div>
                <SearchBar keyword={keyword} keywordChange={handleKeywordChange} />

                {/* Indikasi loading */}
                {loading ? (
                    <div className="flex justify-center items-center py-6">
                        <div className="w-16 h-16 border-t-4 border-violet-500 dark:border-violet-400 border-solid rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <NoteList notes={filteredNotes} />
                )}
            </div>
        </div>
    );
}

NoteArchivePage.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default NoteArchivePage;
