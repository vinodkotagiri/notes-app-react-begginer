import React from 'react'
import './Create.Note.styles.css'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const CreateNote = ({ setNotesHandler }) => {
    const saveHandler = () => {
        setNotesHandler({ title, content })
        console.log({ title, content })
    }
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return (
        <div className="create-note-container">
            <Link to="/" className="back-btn">
                <FaArrowLeft size="2.5rem" />
            </Link>
            <h2 >Create a new Note</h2>
            <h3>Title</h3>
            <input type="text" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
            <h3>Content</h3>
            <textarea rows="10" columns="8" value={content} placeholder="Your content goes here" onChange={(e) => setContent(e.target.value)}></textarea>
            <button onClick={saveHandler}>Save</button>
        </div >
    )
}

export default CreateNote
