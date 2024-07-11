
import React from 'react';
import  './index.css';
import { Routes, Route } from 'react-router-dom';
import { NotesProvider } from './components/NotesContext';
import Front from './components/Front';
import Add from './components/Add';
import Saved from './components/Saved';
import './App.css'
function App() {
    return (
      <>

              
           
        <NotesProvider>
           
               <div className="App">
                     <Routes>
                         <Route path="/" element={<Front />} />
                         <Route path="/add-note" element={<Add />} />
                         <Route path="/saved" element={<Saved />} />
                     </Routes>
                 </div>
            
         </NotesProvider>
        </>
    );
}

export default App;
