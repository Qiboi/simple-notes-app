import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-end text-white" style={{ height: "32em" }}>
            <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
            <p className="text-xl mb-8">Halaman yang Anda cari tidak ditemukan.</p>
            <Link
                to="/simple-notes-app/"
                className="px-6 py-2 font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none transition-all"
            >
                Kembali ke Beranda
            </Link>
        </div>
    );
}

export default NotFoundPage;