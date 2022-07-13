import React, { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Header from './components/Header.component'
import NotesContainer from './components/Notes.container.component'
import CreateNote from './components/Create.Note.component'
import { Routes, Route } from 'react-router-dom'
const App = () => {

    const [notes, setNotes] = useState([


    ])

    //CallBack Function to setNotes
    const setNotesHandler = ({ title, content }) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            title: title,
            content: content,
            date: date.toLocaleDateString()
        }
        setNotes([...notes, newNote])
        console.log(notes);
    }
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<NotesContainer notes={notes} setNotesHandler={() => setNotesHandler} />} />
                    <Route path="create" element={<CreateNote setNotesHandler={() => setNotesHandler} />} />
                </Route>
            </Routes>

        </div>
    )
}

export default App