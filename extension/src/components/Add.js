import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../components/NotesContext';
import "./add.css";

function Add() {
    const [noteText, setNoteText] = useState('');
    const { setSavedNotes, editingNote, setEditingNote } = useContext(NotesContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (editingNote !== null) {
            setNoteText(editingNote.text);
        }
    }, [editingNote]);

    const handleNoteChange = (e) => {
        setNoteText(e.target.value);
    };
 
    const handleSave = () => {
        if (noteText.trim() !== '') {
            if (editingNote !== null) {
                setSavedNotes(prevNotes => {
                    const newNotes = [...prevNotes];
                    newNotes[editingNote.index] = noteText;
                    return newNotes;
                });
                setEditingNote(null);
            } else {
                setSavedNotes(prevNotes => [...prevNotes, noteText]);
            }
            alert('Note saved successfully!');
            setNoteText('');
        } else {
            alert('Please enter a note before saving.');
        }
    };

    return (
        <div className='add'>
            <h1 className='wel'>Welcome</h1>
            <h4 className='subtext'>Write your notes here..</h4>
            <button className='back' onClick={() => navigate('/')}>Back</button>
            <textarea
                 value={noteText}
                onChange={handleNoteChange}
                placeholder="Enter your note here..."
            />
            <button className='bt' onClick={handleSave}>Save</button>
        </div>
    );
}

export default Add;
