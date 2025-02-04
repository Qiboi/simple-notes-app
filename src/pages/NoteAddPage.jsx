import React, { useContext } from "react";
import NoteForm from "../components/NoteForm";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import { LocaleContext } from "../contexts/LocaleContext";

function NoteAddPage() {
    const navigate = useNavigate();

    const { locale } = useContext(LocaleContext);

    function onAddNoteHandler({ title, body }) {
        if (title && body) {
            addNote({ title, body });
            navigate("/simple-notes-app/");
        } else {
            alert("Title and body are required!");
        }
    }

    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100">
                    {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
                </h1>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    {locale === "id" ? "Tambah Catatan Baru" : "Add New Note"}
                </h1>
            </div>
            <NoteForm addNote={onAddNoteHandler} />
        </div>
    );
}

export default NoteAddPage;
