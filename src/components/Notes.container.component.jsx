import React, { Fragment } from 'react'
import './Notes.container.styles.css'
import Note from './Note.component'
import { FaSadCry } from 'react-icons/fa'
const NotesContainer = ({ notes, setNotesHandler }) => {
    return (
        <div className="notes-container">

            {
                notes.length !== 0 ?
                    notes.map((note) => (
                        <Note key={note.id} title={note.title} content={note.content} setNotesHandler={setNotesHandler} />
                    ))
                    : <Fragment ><FaSadCry size="2rem" className="sad-icon" />&nbsp;&nbsp;<h2>No notes to display!</h2></Fragment>
            }
        </div >
    )
}

export default NotesContainer