import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile"; // <-- import new component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ fixed helper function to open routes in new window
  const openNewWindow = (path) => {
    const base = window.location.origin; // e.g. http://localhost:5173
    window.open(`${base}${path}`, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li onClick={() => openNewWindow("/")}>Home</li>
          <li onClick={() => openNewWindow("/chatbot")}>AI Chatbot</li>
          <li onClick={() => openNewWindow("/counselling")}>Counselling Support</li>
          <li onClick={() => openNewWindow("/resources")}>Resources</li>
          <li><button className="help-btn">Contact Us</button></li>
        </ul>

        {/* Profile Icon with Progress on Right */}
        <div 
          className="profile-icon" 
          onClick={() => openNewWindow("/profile")}
          style={{ cursor: "pointer" }}
        >
          <Profile progress={70} /> 
          {/* progress value can be dynamic */}
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
