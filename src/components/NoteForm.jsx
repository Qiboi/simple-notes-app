import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";
import useInput from "../hooks/useInput";

function NoteForm({ addNote }) {
    const [title, setTitle] = useState("");
    const [body, onBodyChange] = useInput("");
    const titleLimit = 50;
    const navigate = useNavigate();

    const { locale } = useContext(LocaleContext);

    const onTitleChange = (event) => {
        const { value } = event.target;
        if (value.length <= titleLimit) {
            setTitle(value);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!title || !body) return;

        addNote({ title, body });
        setTitle("");
        setBody("");
    };

    const onBackClick = () => {
        navigate("/simple-notes-app/");
    };

    return (
        <form
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-300 dark:border-gray-600"
            onSubmit={onSubmit}
        >
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {locale === "id" ? "Judul" : "Title"} ({titleLimit - title.length} {locale === "id" ? "karakter tersisa" : "characters remaining"})
                </label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={onTitleChange}
                    placeholder={locale === "id" ? "Masukkan judul catatan" : "Enter a note title"}
                    className="w-full px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {locale === "id" ? "Isi Catatan" : "Content of Notes"}
                </label>
                <textarea
                    name="body"
                    value={body}
                    onChange={onBodyChange}
                    placeholder={locale === "id" ? "Masukkan isi catatan" : "Enter note content"}
                    className="w-full h-32 px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2"
                ></textarea>
            </div>
            <div className="flex justify-end space-x-2">
                <button
                    type="submit"
                    className="px-6 py-2 font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none transition-all"
                >
                    {locale === "id" ? "Tambahkan" : "Submit"}
                </button>
                <button
                    onClick={onBackClick}
                    className="px-6 py-2 font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none transition-all"
                >
                    {locale === "id" ? "Kembali" : "Cancel"}
                </button>
            </div>
        </form>
    );
}

NoteForm.propTypes = {
    addNote: PropTypes.func.isRequired, // Memastikan bahwa addNote adalah fungsi yang diterima
};

export default NoteForm;
