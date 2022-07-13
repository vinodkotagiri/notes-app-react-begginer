import React from 'react'
import './Note.styles.css'
import { FaTimes } from 'react-icons/fa'
const Note = ({ title, content }) => {
    return (
        <div className="note-container">
            <FaTimes size="1.4rem" className="delete-btn" />
            <div className="note-title">
                <h3>{title}</h3>
            </div>
            <div className="note-content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Note