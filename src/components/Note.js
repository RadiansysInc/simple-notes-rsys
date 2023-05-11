import React from "react";
const Note = ({ note, onSelect, onDelete, onUpdate }) => {
  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete(note.id);
  };
  return (
    <div className="note" onClick={() => onSelect(note)}>
      <img src={`${process.env.PUBLIC_URL}/edit-solid.svg`} alt="Logo" />
      <h3 className="note-title">{note.title}</h3>
      <p className="note-description">{note.body.slice(0, 100)}...</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
export default Note;
