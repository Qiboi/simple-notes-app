import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocaleContext } from "../contexts/LocaleContext";

function NotFoundPage() {
    const { locale } = useContext(LocaleContext);

    return (
        <div className="flex flex-col items-center justify-end text-gray-900 dark:text-white" style={{ height: "32em" }}>
            <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
            <p className="text-xl mb-8">{locale === "id" ? "Halaman yang Anda cari tidak ditemukan." : "The page you are looking for was not found."}</p>
            <Link
                to="/simple-notes-app/"
                className="px-6 py-2 font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none transition-all"
            >
                {locale === "id" ? "Kembali ke Beranda" : "Back to Home"}
            </Link>
        </div>
    );
}

export default NotFoundPage;
