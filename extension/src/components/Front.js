import React from 'react';
import './front.css';
import { useNavigate } from 'react-router-dom';
import notesImage from '../images/notes.png';

function Front() {
    const navigate = useNavigate();
    
    const thoughts = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Do not watch the clock. Do what it does. Keep going.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "Your time is limited, so don't waste it living someone else's life.",
        "The best way to predict the future is to invent it.",
        "Believe you can and you're halfway there.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Don't watch the clock; do what it does. Keep going."
    ];
    
    const todayIndex = new Date().getDate() % thoughts.length;
    const todayThought = thoughts[todayIndex];

    return (
        <>
        <div className="container">
            <div className="header">
                <img src={notesImage} alt="Notes" className="notes-image" />
                <h1 className='notes'>NOTES KEEPING...</h1>
            </div> 
            <div className='thought-container'>  
              <h1 className='day'>Thought of the day..</h1>
                <p className='thought'>{todayThought}</p>
            </div>
            <div className='btn'>
                {/* for adding route on buttons we use navigate hook */}
                <button className='btn1' onClick={() => navigate('/add-note')}>
                    <i className="fas fa-plus"></i> Add Notes
                </button>
                <button className='btn2' onClick={() => navigate('/saved')}>
                    <i className="fas fa-eye"></i> View Notes
                </button>
            </div>
        </div>
        </>
    );
}

export default Front;
