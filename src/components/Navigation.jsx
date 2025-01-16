import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaArchive } from "react-icons/fa";
import PropTypes from "prop-types";

function Navigation({ currentPage }) {
    return (
        <div className="flex space-x-4">
            <Link
                to="/simple-notes-app/add"
                className="text-gray-300 hover:text-violet-500 focus:outline-none transition-all"
                title="Tambah Catatan"
            >
                <FaPlus size={24} />
            </Link>
            <Link
                to={currentPage === "home" ? "/simple-notes-app/archive" : "/simple-notes-app/"}
                className={currentPage === "home" ? "text-gray-300 hover:text-violet-500 focus:outline-none transition-all" : "text-violet-500 focus:outline-none transition-all"}
                title={currentPage === "home" ? "Lihat Arsip" : "Kembali ke Beranda"}
            >
                <FaArchive size={24} />
            </Link>
        </div>
    );
}

Navigation.propTypes = {
    currentPage: PropTypes.oneOf(["home", "archive"]).isRequired,
};

export default Navigation;