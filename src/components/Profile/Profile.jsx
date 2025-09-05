import React, { useEffect, useState } from "react";
import "./profile.css";

export default function Profile({ progress = 65 }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const progressOffset = circumference - (progress / 100) * circumference;
      setOffset(progressOffset);
    }, 300);
    return () => clearTimeout(timeout);
  }, [circumference, progress]);

  return (
    <div className="profile-progress-wrapper">
      <svg className="progress-ring" width="70" height="70">
        {/* Background ring */}
        <circle
          stroke="#ddd"
          strokeWidth="4"
          fill="transparent"
          r={radius}
          cx="35"
          cy="35"
        />
        {/* Progress ring */}
        <circle
          stroke="#4CAF50"
          strokeWidth="4"
          fill="transparent"
          r={radius}
          cx="35"
          cy="35"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s ease-out",
          }}
        />
      </svg>

      {/* Profile Image */}
      <img
        src="https://i.pravatar.cc/60"
        alt="Profile"
        className="profile-img"
      />
    </div>
  );
}
