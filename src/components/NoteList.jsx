import React from 'react';
import NoteItem from './NoteItem';

class NoteList extends React.Component {
  render() {
    const { notes, onDelete, onArchive } = this.props;

    if (notes.length === 0) {
      return (
        <p className="text-gray-400 text-center text-lg font-medium py-6">
          Tidak ada catatan
        </p>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))}
      </div>
    );
  }
}

export default NoteList;