import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [category, setCategory] = useState('');
//**
  const [filterCategory, setFilterCategory] = useState('All');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleAddNote = () => {
    if (input.trim()) {
      const newNote = {
        text: input.trim(),
        category: category.trim(),
      };

      if (editIndex !== null) {
        // Handle editing case
        const newNotes = notes.map((note, index) =>
          index === editIndex ? newNote : note
        );
        setNotes(newNotes);
        setEditIndex(null);
      } else{
          setNotes([...notes, newNote]);
        }

      setInput('');
      setCategory('');
    }
  };




      // if(editIndex!==null){
      //   //handle the editing case
      //   const newNotes = notes.map((note, index)=>{
      //     if(index===editIndex){
      //       return newNote;
      //     }
      //     return note;
        // });

       

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  const handleEditNote = (index) => {
    setInput(notes[index]);
    setCategory(notes[index].category);
    setEditIndex(index);

  };


  const filteredNotes = filterCategory === 'All' ? notes : notes.filter(note => note.category === filterCategory);

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
        <select name = "category" id = "category" onChange = {handleCategoryChange}>
          <option value="Category">Category</option>
          <option value="Work">Work</option>
          <option value="School">School</option>
          <option value="Others">Others</option>
        </select>

        <button onClick={handleAddNote}>{editIndex!==null? 'Update Note':'Add Note'}</button>
      </div>
       
       <div className="filter-container">
        <label>Filter by Category: </label>
        <select value={filterCategory} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="School">School</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="notes-container">
        {filteredNotes.length === 0 ? (
          <p>No notes yet</p>
        ) : (
          filteredNotes.map((note, index) => (
            <div className="note" key={index}>
              <p>
                {note.text} - <em>{note.category}</em>
                </p>
              <div className='note-buttons'>
                <button onClick={() => handleEditNote(index)}>Edit</button>
                <button onClick={() => handleDeleteNote(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
