import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import RegisterInput from "../components/RegisterInput";
import ThemeContext from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { LocaleContext } from "../contexts/LocaleContext";

function RegisterPage() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { locale } = useContext(LocaleContext);
    const navigate = useNavigate();

    const handleRegister = async ({ name, email, password }) => {
        const { error } = await register({ name, email, password });
        if (!error) {
            alert(locale === "id" ? "Registrasi berhasil! Silakan login." : "Registration successful! Please login.");
            navigate("/simple-notes-app/login");
        } else {
            alert(locale === "id" ? "Registrasi gagal. Periksa data Anda." : "Registration failed. Check your data.");
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-end text-gray-900 dark:text-white transition-colors duration-300"
            style={{ height: "44em" }}
        >
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300">
                <h1 className="text-3xl font-extrabold text-center mb-8">
                    {locale === "id" ? "Daftar" : "Register"}
                </h1>
                <RegisterInput register={handleRegister} />
                <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
                    {locale === "id" ? "Sudah punya akun?" : "Already have an account?"}{" "}
                    <Link to="/simple-notes-app/login" className="text-violet-500 hover:text-violet-400">
                        {locale === "id" ? "Login di sini" : "Login here"}
                    </Link>
                </p>
            </div>
        </div>
    );
}

function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 text-gray-900 dark:text-white hover:text-violet-500 transition-all"
            title="Toggle Theme"
        >
            {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
    );
}

ThemeToggle.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired
};

export default RegisterPage;
