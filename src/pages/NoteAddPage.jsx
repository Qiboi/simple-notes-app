import React from "react";
import NoteForm from "../components/NoteForm";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

function NoteAddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler({ title, body }) {
        addNote({ title, body });
        navigate("/simple-notes-app/");
    }

    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-extrabold text-center mb-8">Aplikasi Catatan</h1>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-gray-100 mb-6">Tambah Catatan Baru</h1>
            </div>
            <NoteForm addNote={onAddNoteHandler} />
        </div>
    );
}

export default NoteAddPage;