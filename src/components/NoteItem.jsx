import React from 'react';


class NoteItem extends React.Component {
  render() {
    const { note, onDelete, onArchive } = this.props;

    return (
      <div className="p-6 bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-500 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-3 truncate text-white">
            {note.title}
          </h3>
          <p className="text-xs text-gray-300 italic mb-4">
            Dibuat pada: {new Date(note.createdAt).toLocaleString()}
          </p>
          <p className="text-sm text-gray-200 mb-6">
            {note.body}
          </p>
        </div>
        <div className="mt-auto flex justify-between">
          <button
            className="px-5 py-2 text-sm font-medium bg-red-600 text-gray-50 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none focus:ring-offset-2 transition-all"
            onClick={() => onDelete(note.id)}
          >
            Hapus
          </button>
          <button
            className="px-5 py-2 text-sm font-medium bg-sky-500 text-gray-50 rounded-lg hover:bg-sky-600 focus:ring-2 focus:ring-sky-400 focus:outline-none focus:ring-offset-2 transition-all"
            onClick={() => onArchive(note.id)}
          >
            {note.archived ? 'Pindahkan' : 'Arsipkan'}
          </button>
        </div>
      </div>
    );
  }
}

export default NoteItem;
