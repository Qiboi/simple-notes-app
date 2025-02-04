import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";

function NoteList({ notes }) {
    const { locale } = useContext(LocaleContext);

    if (notes.length === 0) {
        return (
            <p className="text-gray-400 text-center text-lg font-medium py-6">
                {locale === "id" ? "Tidak ada catatan" : "No notes"}
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} />
            ))}
        </div>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
