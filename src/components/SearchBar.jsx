import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
    const { locale } = useContext(LocaleContext);

    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder={locale === "id" ? "Cari catatan..." : "Find notes..."}
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
                className="w-full px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors duration-300"
            />
        </div>
    );
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
