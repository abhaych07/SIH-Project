import React from "react";
import './ExploreButtons.css';

function ExploreButtons() {
  return (
    <div>
      <span><button className="slide-up-btn">Explore More ↓</button></span>&nbsp;&nbsp;
      <span>
        <button
          className="slide-up-btn"
          onClick={() => window.open("/signup", "_blank")}
        >
          Sign Up
        </button>
      </span>
    </div>
  );
}

export default ExploreButtons;
