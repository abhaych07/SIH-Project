import React from "react";
import "./HomePage.css";
import NeuralBackground from "./NeuralBackground";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ExploreButtons from "./ExploreButtons";
import MoodSection from "./MoodSection";
import Program from "./Program";
import SuccessStories from "./SuccessStories";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <NeuralBackground />
      <div style={{ position: "relative", zIndex: 1, padding: "0rem" }}>
        <Navbar />
        <h1 className="flashing-text">WELCOME LEARNERS!</h1>

        <HeroSection />
        <ExploreButtons />
        <MoodSection />
        <Program />
        <SuccessStories />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
