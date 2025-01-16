import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";

function NoteDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const note = getNote(id);

    if (!note) {
        return (
            <div className="p-6">
                <p className="text-gray-400 text-center text-lg font-medium py-6">
                    Catatan tidak ditemukan
                </p>
            </div>
        );
    }

    // Format tanggal
    const createdAt = new Date(note.createdAt).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleDelete = () => {
        deleteNote(note.id); // Hapus catatan
        navigate("/simple-notes-app/"); // Navigasi ke halaman beranda
    };

    // Fungsi untuk mengarsipkan/membatalkan arsip catatan
    const handleArchive = () => {
        if (note.archived) {
            unarchiveNote(note.id); // Batalkan arsip
        } else {
            archiveNote(note.id); // Arsipkan
        }
        navigate("/simple-notes-app/"); // Navigasi ke halaman beranda
    };

    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-extrabold text-center mb-8">Aplikasi Catatan</h1>
            </div>
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-100 mb-6">Detail Catatan</h1>
                <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-100 mb-4">{note.title}</h2>
                    <p className="text-gray-300 mb-4">{note.body}</p>
                    <p className="text-sm text-gray-400">Dibuat pada: {createdAt}</p>
                    <div className="flex justify-end mt-6 space-x-2">
                        <button
                            onClick={handleDelete}
                            className="px-6 py-2 font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none transition-all"
                        >
                            Hapus
                        </button>
                        <button
                            onClick={handleArchive}
                            className="px-6 py-2 font-semibold text-white bg-yellow-600 rounded-full hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none transition-all"
                        >
                            {note.archived ? "Batal Arsip" : "Arsipkan"}
                        </button>
                        <button
                            onClick={() => navigate("/simple-notes-app/")}
                            className="px-6 py-2 font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none transition-all"
                        >
                            Kembali
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoteDetailPage;