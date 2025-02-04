import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import ThemeContext from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { LocaleContext } from "../contexts/LocaleContext";

function LoginPage({ loginSuccess }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { locale } = useContext(LocaleContext);

    const onLogin = async ({ email, password }) => {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        } else {
            // Menambahkan handling untuk error jika login gagal
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-end text-gray-900 dark:text-white transition-colors duration-300"
            style={{ height: "41em" }}
        >
            {/* Toggle Tema */}
            <button
                onClick={toggleTheme}
                className="absolute top-4 right-4 text-gray-900 dark:text-white hover:text-violet-500 transition-all"
                title="Toggle Tema"
            >
                {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>

            <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300">
                <h1 className="text-3xl font-extrabold text-center mb-8">Login</h1>
                <LoginInput login={onLogin} />
                <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
                    {locale === "id" ? "Belum punya akun?" : "Don't have an account yet?"}{" "}
                    <Link
                        to="/simple-notes-app/register"
                        className="text-violet-500 hover:text-violet-400"
                    >
                        {locale === "id" ? "Daftar di sini" : "Register here"}
                    </Link>
                </p>
            </div>
        </div>
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
