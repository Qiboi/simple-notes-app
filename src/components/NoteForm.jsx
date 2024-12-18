import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      titleLimit: 50,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    if (name === 'title' && value.length > this.state.titleLimit) return;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state;

    if (!title || !body) return;

    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    this.props.onAddNote(newNote);
    this.setState({ title: '', body: '' });
  }

  render() {
    const { title, body, titleLimit } = this.state;

    return (
      <form className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700" onSubmit={this.handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Judul ({titleLimit - title.length} karakter tersisa)
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            placeholder="Masukkan isi catatan"
            className="w-full h-32 px-4 py-2 text-gray-100 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none transition-all"
          >
            Tambahkan
          </button>
        </div>
      </form>
    );
  }
}

export default NoteForm;
