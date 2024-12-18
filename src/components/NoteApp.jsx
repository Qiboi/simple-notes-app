import React from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";
import { getData } from "../utils/data";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
            searchKeyword: '',
        };

        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.toggleArchive = this.toggleArchive.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    addNote(newNote) {
        this.setState((prevState) => ({
            notes: [...prevState.notes, newNote],
        }));
    }

    deleteNote(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.filter((note) => note.id !== id),
        }));
    }

    toggleArchive(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            ),
        }));
    }

    handleSearch(keyword) {
        this.setState({ searchKeyword: keyword });
    }

    render() {
        const { notes, searchKeyword } = this.state;
        const filteredNotes = searchKeyword
            ? notes.filter((note) =>
                note.title.toLowerCase().includes(searchKeyword.toLowerCase())
            )
            : notes;

        const activeNotes = filteredNotes.filter((note) => !note.archived);
        const archivedNotes = filteredNotes.filter((note) => note.archived);

        return (
            <div className="min-h-screen bg-gray-900 text-white">
                <div className="container mx-auto py-8 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-extrabold text-center mb-8">Aplikasi Catatan</h1>
                        <SearchBar onSearch={this.handleSearch} />
                        <NoteForm onAddNote={this.addNote} />
                    </div>
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Catatan Aktif</h2>
                        {activeNotes.length > 0 ? (
                            <NoteList
                                notes={activeNotes}
                                onDelete={this.deleteNote}
                                onArchive={this.toggleArchive}
                            />
                        ) : (
                            <p className="text-gray-400">Tidak ada catatan aktif.</p>
                        )}
                    </div>
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Catatan Arsip</h2>
                        {archivedNotes.length > 0 ? (
                            <NoteList
                                notes={archivedNotes}
                                onDelete={this.deleteNote}
                                onArchive={this.toggleArchive}
                            />
                        ) : (
                            <p className="text-gray-400">Tidak ada catatan arsip.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteApp;
