import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaSignOutAlt, FaCaretDown } from "react-icons/fa";

const UserDropdown = ({ name, logout, locale }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                className="text-violet-500 hover:text-violet-600 focus:outline-none transition-all flex space-x-2 items-center"
                onClick={toggleDropdown}
                title={locale === "id" ? "Keluar" : "Logout"}
            >
                <span className="text-lg font-bold">Hello, {name}</span>
                <FaCaretDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                    <button
                        className="w-full px-4 py-2 text-left text-red-500 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                        onClick={logout}
                    >
                        <FaSignOutAlt size={20} />
                        <span className="font-semibold">{locale === "id" ? "Keluar" : "Logout"}</span>
                    </button>
                </div>
            )}
        </div>
    );
};

UserDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
}

export default UserDropdown;