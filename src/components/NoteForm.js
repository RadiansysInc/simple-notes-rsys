import React, { useState, useEffect } from "react";
const NoteForm = ({ onSubmit, note = null }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setBody(note.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [note]);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title, body);
    if (!note) {
      setTitle("");
      setBody("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        class="input-field"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Description"
        required
        class="textarea-field"
      ></textarea>
      <div className="submit-button">
      <button type="submit"  class="button">{note ? "Update" : "Save"}</button>
      </div>
    </form>
  );
};
export default NoteForm;