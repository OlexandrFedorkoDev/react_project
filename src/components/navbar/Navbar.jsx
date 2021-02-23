import React from 'react';


import {
    NavLink
}
    from 'react-router-dom';
import './Navbar.css';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li><NavLink to="/Profile">Profile</NavLink></li>
                <li><NavLink to="/Dialogs">Messeges</NavLink></li>
                <li><NavLink to="/News">News</NavLink></li>

                <li><NavLink to="/Settings">Settings</NavLink></li>
            </ul>
        </nav>)
}

export default Nav;