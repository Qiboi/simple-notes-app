import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Cari catatan..."
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
                className="w-full px-4 py-2 text-gray-100 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset"
            />
        </div>
    );
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;