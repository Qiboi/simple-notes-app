import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput("");
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");

    const { locale } = useContext(LocaleContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        register({
            name,
            email,
            password,
        });
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {locale === "id" ? "Nama" : "Name"}
                </label>
                <input
                    type="text"
                    placeholder={locale === "id" ? "Masukkan nama" : "Enter name"}
                    value={name}
                    onChange={onNameChange}
                    className="w-full px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-300"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    placeholder={locale === "id" ? "Masukkan email" : "Enter email"}
                    value={email}
                    onChange={onEmailChange}
                    className="w-full px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-300"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                </label>
                <input
                    type="password"
                    placeholder={locale === "id" ? "Masukkan password" : "Enter Password"}
                    value={password}
                    onChange={onPasswordChange}
                    className="w-full px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-300"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full px-6 py-2 font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none transition-all"
            >
                {locale === "id" ? "Daftar" : "Sign Up"}
            </button>
        </form>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired, // Validasi propTypes
};

export default RegisterInput;
