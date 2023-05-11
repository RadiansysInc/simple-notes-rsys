import React from "react";
import Note from "./Note";
const NoteList = ({ notes, onNoteSelect, onDelete, onUpdate }) => {
  return (
    <div className="note-list">
      {notes.length ? (
        <>
          {notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              onSelect={onNoteSelect}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </>
      ) : (
        <>
          Start jotting down your thoughts and ideas! This space is all yours.
        </>
      )}
    </div>
  );
};
export default NoteList;
