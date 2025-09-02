import React, { useState, useEffect, useRef } from "react";

export default function WordByWordText({ text, speed = 500 }) {
  const words = text.split(" ");
  const [displayedWords, setDisplayedWords] = useState([]);
  const timeoutIds = useRef([]);

  useEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id));
    timeoutIds.current = [];
    setDisplayedWords([]);

    words.forEach((word, index) => {
      const id = setTimeout(() => {
        setDisplayedWords((prev) => [...prev, word]);
      }, index * speed);
      timeoutIds.current.push(id);
    });

    return () => {
      timeoutIds.current.forEach((id) => clearTimeout(id));
    };
  }, [text, speed]);

  return (
    <h2 style={{ fontSize: "24px", fontWeight: "500", lineHeight: "1.5em" }}>
      {displayedWords.map((word, i) => (
        <span
          key={i}
          style={{
            opacity: 0,
            animation: "fadeIn 0.8s forwards",
            animationDelay: `${i * 0.1}s`,
            display: "inline-block",
            marginRight: "8px",
          }}
        >
          {word}
        </span>
      ))}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </h2>
  );
}
