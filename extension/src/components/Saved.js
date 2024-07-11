import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../components/NotesContext';
import "./saved.css";

function Saved() { 
    const { savedNotes, setSavedNotes, setEditingNote } = useContext(NotesContext);
    const navigate = useNavigate();

    const colors = ['#FFFF00', '#87CEEB', '#FFB6C1', '#90EE90']; // Define an array of colors

    const handleDelete = (index) => {
        const newNotes = [...savedNotes];
        newNotes.splice(index, 1);
        setSavedNotes(newNotes);
    };

    const handleCopy = (note) => {
        navigator.clipboard.writeText(note);
        alert('Note copied to clipboard!');
    }; 

    const handleEdit = (note, index) => {
        setEditingNote({ text: note, index });
        navigate('/add-note');
    };

    return (
        <div className="saved-container">
            <h1 className="title">Saved Notes</h1>
            <button className='bn' onClick={() => navigate('/')}>Back</button>
            <div className="notes-list">
                {savedNotes.map((note, index) => (
                   <div className="note-card" key={index} style={{ backgroundColor: colors[index % colors.length] }}>
                        <p className="note-text">{note}</p>
                       <div className="note-actions">
                            <button onClick={() => handleEdit(note, index)}>
                                <i className="fas fa-edit"></i>
                            </button>
                            <button onClick={() => handleCopy(note)}>
                                <i className="fas fa-copy"></i>
                            </button>
                        <button onClick={() => handleDelete(index)}>
                                <i className="fas fa-trash"></i>
                            </button>   
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ); 
} 

export default Saved; 
