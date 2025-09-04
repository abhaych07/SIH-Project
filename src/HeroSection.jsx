import React from "react";
import './HeroSection.css';
import WordByWordText from "./Wordbyword.jsx";

function HeroSection() {
  return (
    <div style={{ padding: "50px", height: "30vh" }}>
      <WordByWordText
        text="Our mission is to build a Digital Psychological Intervention System that is accessible, stigma-free, and tailored to the cultural and institutional context of Indian higher education."
        speed={10}
      />
      <br />
      <WordByWordText
        text="Our platform integrates AI-guided first-aid support, confidential counselling booking, psychoeducational resources, peer support communities, and real-time analytics—all in one place."
        speed={10}
      />
    </div>
  );
}

export default HeroSection;
