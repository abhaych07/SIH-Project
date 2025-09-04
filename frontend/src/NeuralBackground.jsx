import React from "react";
import "./bubbles.css";

export default function NeuralBackground() {
  const colors = [
    "rgba(135, 206, 250, 0.6)", // light sky blue
    "rgba(173, 216, 230, 0.6)", // light blue
    "rgba(255, 182, 193, 0.6)", // light pink
    "rgba(144, 238, 144, 0.6)", // light green
    "rgba(221, 160, 221, 0.6)", // plum
  ];

  return (
    <div className="bubble-background">
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.floor(Math.random() * 80) + 40; // 40px - 120px
        const left = Math.random() * 100; // position in %
        const duration = Math.random() * 6 + 6; // 6s - 12s
        const delay = Math.random() * 5; // random delay
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <span
            key={i}
            className="bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              background: color,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          ></span>
        );
      })}
    </div>
  );
}
