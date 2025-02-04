import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/network-data";
import { LocaleContext } from "../contexts/LocaleContext";

function NoteDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);

    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        const fetchNote = async () => {
            setLoading(true);
            const { data } = await getNote(id);
            if (data) {
                setNote(data);
            } else {
                setNote(null);
            }
            setLoading(false);
        };

        fetchNote();
    }, [id]);

    const handleDelete = async () => {
        await deleteNote(id);
        navigate("/simple-notes-app/");
    };

    const handleArchive = async () => {
        if (note.archived) {
            await unarchiveNote(id);
        } else {
            await archiveNote(id);
        }
        navigate("/simple-notes-app/");
    };

    if (loading) {
        return (
            <div className="p-6">
                <div className="flex justify-center items-center py-6">
                    <div className="w-16 h-16 border-t-4 border-violet-500 border-solid rounded-full animate-spin"></div>
                </div>
                <p className="text-gray-400 dark:text-gray-500 text-center text-lg font-medium py-6">
                    {locale === "id" ? "Memuat catatan..." : "Load notes"}
                </p>
            </div>
        );
    }

    if (!note || !note.title || !note.body || !note.createdAt) {
        return (
            <div className="p-6">
                <p className="text-gray-400 dark:text-gray-500 text-center text-lg font-medium py-6">
                    {locale === "id" ? "Catatan tidak ditemukan" : "Note not found"}
                </p>
            </div>
        );
    }

    const createdAt = new Date(note.createdAt).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100">
                    {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
                </h1>
            </div>
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    {locale === "id" ? "Detail Catatan" : "Note Details"}
                </h1>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-300 dark:border-gray-600">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        {note.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{note.body}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {locale === "id" ? "Dibuat pada: " : "Created At: "}
                        {createdAt}
                    </p>
                    <div className="flex justify-end mt-6 space-x-2">
                        <button
                            onClick={handleDelete}
                            className="px-6 py-2 font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none transition-all"
                        >
                            {locale === "id" ? "Hapus" : "Delete"}
                        </button>
                        <button
                            onClick={handleArchive}
                            className="px-6 py-2 font-semibold text-white bg-yellow-600 rounded-full hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none transition-all"
                        >
                            {note.archived
                                ? locale === "id"
                                    ? "Batal Arsip"
                                    : "Cancel Archive"
                                : locale === "id"
                                ? "Arsipkan"
                                : "Archive"}
                        </button>
                        <button
                            onClick={() => navigate("/simple-notes-app/")}
                            className="px-6 py-2 font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none transition-all"
                        >
                            {locale === "id" ? "Kembali" : "Back"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoteDetailPage;
