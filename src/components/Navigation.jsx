import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaArchive, FaSignOutAlt, FaSun, FaMoon, FaLanguage } from "react-icons/fa"; // Tambahkan FaLanguage
import PropTypes from "prop-types";
import ThemeContext from "../contexts/ThemeContext"; // Import ThemeContext
import { LocaleContext } from "../contexts/LocaleContext"; // Import LocaleContext

function Navigation({ currentPage, logout }) {
    const { theme, toggleTheme } = useContext(ThemeContext); // Ambil theme dan toggleTheme
    const { locale, toggleLocale } = useContext(LocaleContext); // Ambil locale dan toggleLocale

    return (
        <div className="flex space-x-4 items-center">
            <Link
                to="/simple-notes-app/add"
                className="text-gray-300 dark:text-gray-100 hover:text-violet-500 focus:outline-none transition-all"
                title={locale === "id" ? "Tambah Catatan" : "Add Note"}
            >
                <FaPlus size={24} />
            </Link>
            <Link
                to={currentPage === "home" ? "/simple-notes-app/archive" : "/simple-notes-app/"}
                className={currentPage === "home" ? "text-gray-300 dark:text-gray-100 hover:text-violet-500 focus:outline-none transition-all" : "text-violet-500 focus:outline-none transition-all"}
                title={currentPage === "home" ? (locale === "id" ? "Lihat Arsip" : "View Archive") : (locale === "id" ? "Kembali ke Beranda" : "Back to Home")}
            >
                <FaArchive size={24} />
            </Link>
            <button 
                className="text-yellow-400 dark:text-yellow-500 hover:text-violet-500 focus:outline-none transition-all"
                onClick={toggleTheme} // Tambahkan fungsi toggle tema
                title={locale === "id" ? "Ubah Tema" : "Change Theme"}
            >
                {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <button 
                className="text-blue-500 dark:text-blue-400 hover:text-violet-500 focus:outline-none transition-all"
                onClick={toggleLocale} // Tambahkan fungsi toggle bahasa
                title={locale === "id" ? "Ubah Bahasa" : "Change Language"}
            >
                <FaLanguage size={24} />
            </button>
            <button 
                className="text-red-500 dark:text-red-400 hover:text-violet-500 focus:outline-none transition-all"
                onClick={logout}
                title={locale === "id" ? "Keluar" : "Logout"}
            >
                <FaSignOutAlt size={24} />
            </button>
        </div>
    );
}

Navigation.propTypes = {
    currentPage: PropTypes.oneOf(["home", "archive"]).isRequired,
    logout: PropTypes.func.isRequired,
};

export default Navigation;