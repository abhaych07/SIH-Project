import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Profile from "../Profile/Profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chatbot">AI Chatbot</Link></li>
          <li><Link to="/counselling">Counselling Support</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li>
            <Link to="/contact">
              <button className="help-btn">Contact Us</button>
            </Link>
          </li>
        </ul>

        {/* Profile */}
        <div className="profile-icon" style={{ cursor: "pointer" }}>
          <Link to="/profile">
            <Profile progress={70} />
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
