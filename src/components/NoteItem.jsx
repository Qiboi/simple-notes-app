import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

class NoteItem extends React.Component {
    render() {
        const { note } = this.props;

        return (
            <Link
                to={`/simple-notes-app/notes/${note.id}`}
                className="block transform transition-all duration-300 ease-in-out hover:scale-105 hover:border-violet-500"
            >
                <div className="p-6 bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-500 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                    <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-3 truncate text-white">
                            {note.title}
                        </h3>
                        <p className="text-xs text-gray-300 italic mb-4">
                            Dibuat pada: {new Date(note.createdAt).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-200 mb-6 line-clamp-6">
                            {note.body}
                        </p>
                    </div>
                </div>
            </Link>
        );
    }
}

NoteItem.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        archived: PropTypes.bool.isRequired,
    }).isRequired,
};

export default NoteItem;