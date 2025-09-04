import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile"; // <-- import new component
import { useAuth, UserButton } from "@clerk/clerk-react";


export default function Navbar() {
  const { getToken, isSignedIn } = useAuth(); // sigin by clerk done by anuj
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ fixed helper function to open routes in new window
  const openNewWindow = (path) => {
    const base = window.location.origin; // e.g. http://localhost:5173
    window.open(`${base}${path}`, "_blank", "noopener,noreferrer");
  };

  // sigin by clerk done by anuj
  useEffect(() => {
    const syncUser = async () => {
      if (!isSignedIn) return;

      const token = await getToken();

      const result = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(result)
    };

    syncUser();
  }, [isSignedIn, getToken]);

  // let it remain here for now

  // const routecheck = async () => {
  //     if (!isSignedIn) return;

  //     const token = await getToken();

  //     const result = await fetch("http://localhost:5000/api/register", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     console.log(result)
  //   };


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

        {/* sigin by clerk done by anuj */}
        {/* // let it remain here for now */}
        <div>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <a href="/sign-in">
              <button>Sign-in</button>
            </a>
          )}
          <a href="/sign-up">
            <button>Sign-up</button>
          </a>
        </div>

          <button onClick={routecheck}>check</button>
          {/* till this */}


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
