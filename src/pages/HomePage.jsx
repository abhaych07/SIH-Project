import React from "react";
import './HomePage.css'
import HeroSection from "../components/HeroSection/HeroSection";
import ExploreButtons from "../components/Buttons/ExploreButtons";
import MoodSection from "../components/MoodSection/MoodSection";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import Footer from "../components/Footer/Footer.jsx"

export default function HomePage() {
  return (
    <div>
      <h1 className="flashing-text">WELCOME LEARNERS!</h1>
      <HeroSection />
      <ExploreButtons />
      <MoodSection />
      <SuccessStories />
      <Footer/>
    </div>
  );
}
