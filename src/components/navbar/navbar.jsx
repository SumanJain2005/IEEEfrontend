// src/components/Navbar/Navbar.jsx

import React, { useState } from 'react';
import './navbar.css';
import menuIcon from './MenuBTN.png'; // Adjust the path as needed
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#register">Register</a></li>
      </ul>
      <button className="signup-btn"><Link to="./components/Signup/Signup.jsx">Sign Up</Link></button>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
