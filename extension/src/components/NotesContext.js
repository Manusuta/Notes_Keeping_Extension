import React, { createContext, useState, useEffect } from 'react';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
    const [savedNotes, setSavedNotes] = useState([]);
    const [editingNote, setEditingNote] = useState(null);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('savedNotes'));
        if (storedNotes) {
            setSavedNotes(storedNotes);
         }
    }, []);

    useEffect(() => {
        localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
    }, [savedNotes]);

    return (
        <NotesContext.Provider value={{ savedNotes, setSavedNotes, editingNote, setEditingNote }}>
            {children}
        </NotesContext.Provider>
    );
};

export { NotesContext, NotesProvider };
