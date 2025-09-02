import React, { useState } from "react";
import "./MoodSelector.css";

export default function MoodSelector() {
  const moods = [
    { id: 1, label: "😊 Happy" },
    { id: 2, label: "😢 Sad" },
    { id: 3, label: "😟 Stressed" },
    { id: 4, label: "😡 Angry" },
    { id: 5, label: "😌 Relaxed" }
  ];

  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="mood-selector">
      <h2>Select Your Mood</h2>
      <div className="mood-options">
        {moods.map((mood) => (
          <button
            key={mood.id}
            className={`mood-btn ${selectedMood === mood.id ? "active" : ""}`}
            onClick={() => setSelectedMood(mood.id)}
          >
            {mood.label}
          </button>
        ))}
      </div>
      {selectedMood && (
        <p className="selected-text">
          You are feeling: <strong>{moods.find((m) => m.id === selectedMood).label}</strong>
        </p>
      )}
    </div>
  );
}
