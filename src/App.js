import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddNote = () => {
    if (input.trim()) {
      setNotes([...notes, input.trim()]);
      setInput('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your note here"
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="notes-container">
        {notes.length === 0 ? (
          <p>No notes yet</p>
        ) : (
          notes.map((note, index) => (
            <div className="note" key={index}>
              <p>{note}</p>
              <button onClick={() => handleDeleteNote(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
