import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function NoteForm({ addNote }) {
    const navigate = useNavigate();

    return <NoteFormChild addNote={addNote} navigate={navigate} />;
}

class NoteFormChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            titleLimit: 50,
        };

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onBackHandleClick = this.onBackHandleClick.bind(this);
    }

    onNameChangeEventHandler(event) {
        const { name, value } = event.target;

        if (name === "title" && value.length > this.state.titleLimit) return;

        this.setState({ [name]: value });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        const { title, body } = this.state;

        if (!title || !body) return;

        this.props.addNote({ title, body });
        this.setState({ title: "", body: "" });
    }

    onBackHandleClick() {
        this.props.navigate("/simple-notes-app/");
    }

    render() {
        const { title, body, titleLimit } = this.state;

        return (
            <form className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700" onSubmit={this.onSubmitEventHandler}>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Judul ({titleLimit - title.length} karakter tersisa)
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={this.onNameChangeEventHandler}
                        placeholder="Masukkan judul catatan"
                        className="w-full px-4 py-2 text-gray-100 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Isi Catatan
                    </label>
                    <textarea
                        name="body"
                        value={body}
                        onChange={this.onBodyChangeEventHandler}
                        placeholder="Masukkan isi catatan"
                        className="w-full h-32 px-4 py-2 text-gray-100 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset"
                    ></textarea>
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        type="submit"
                        className="px-6 py-2 font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none transition-all"
                    >
                        Tambahkan
                    </button>
                    <button
                        onClick={this.onBackHandleClick}
                        className="px-6 py-2 font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none transition-all"
                    >
                        Kembali
                    </button>
                </div>
            </form>
        );
    }
}

NoteForm.propTypes = {
    addNote: PropTypes.func.isRequired,
};

NoteFormChild.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default NoteForm;