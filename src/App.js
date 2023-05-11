import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Search from "./components/Search";
import Sort from "./components/Sort";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("title");
  const [selectedNote, setSelectedNote] = useState(null);
  const addNote = (title, body) => {
    const newNote = {
      id: uuidv4(),
      title,
      body,
      created: new Date(),
      modified: new Date(),
    };
    setNotes([...notes, newNote]);
  };
  const updateNote = (id, updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...updatedNote, modified: new Date() } : note
    );
    setNotes(updatedNotes);
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const filteredNotes = notes
    .filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.body.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "title") {
        return a.title.localeCompare(b.title);
      } else if (sort === "created") {
        return new Date(b.created) - new Date(a.created);
      } else if (sort === "modified") {
        return new Date(b.modified) - new Date(a.modified);
      } else {
        return 0;
      }
    });
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column">
            <div>
              <h1>NoteMate</h1>
            </div>
            <div className="first-column-content">
              <Search onSearch={setSearch} />
              <Sort onSort={setSort} />
              <div className="note-form-content">
                <NoteForm
                  onSubmit={(title, body) => {
                    if (selectedNote) {
                      updateNote(selectedNote.id, { title, body });
                      setSelectedNote(null);
                    } else {
                      addNote(title, body);
                    }
                  }}
                  note={selectedNote}
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="added-notes">
              <NoteList
                notes={filteredNotes}
                onNoteSelect={(note) => setSelectedNote(note)}
                onDelete={deleteNote}
                onUpdate={updateNote}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
