import React from 'react'
import './Header.styles.css'
import { FaPen } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <h1 className="title">Notes App</h1>
            <Link to="/create">
                <button className="create-btn"><FaPen className="edit-icon" /> Create</button>
            </Link>
            <input className="search-field" type="search" placeholder="Search Notes" />
            <Outlet />
        </div>
    )
}

export default Header
