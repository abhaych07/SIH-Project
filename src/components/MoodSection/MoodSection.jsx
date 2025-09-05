import React from "react";
import './MoodSection.css';
import MoodSelector from "./Mood.jsx";

function MoodSection() {
  return (
    <div className="mood">
      <MoodSelector />
    </div>
  );
}

export default MoodSection;
