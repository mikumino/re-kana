import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar_list">
                <li className="navbar_item">
                    <Link to="/" className="navbar_link navbar_link_evil">Re-Kana</Link>
                </li>
                <li className="navbar_item">
                    <Link to="/pages/guides" className="navbar_link">Guides</Link>
                </li>
                <li className="navbar_item">
                    <Link to="/pages/about" className="navbar_link">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;