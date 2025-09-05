import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// Layout components
import Navbar from "./components/Navbar/Navbar";


// Pages
import HomePage from "./pages/HomePage";
import Landing from "./pages/Landing";
import ChatbotPage from "./pages/ChatbotPage";
import CounsellingPage from "./pages/CounsellingPage";
import ResourcesPage from "./pages/ResourcesPage";
import ProfilePage from "./components/Profile/ProfilePage";
import Program from "./pages/Program";
import SignupForm from "./pages/SignupForm";
import Wordbyword from "./pages/Wordbyword";
import SuccessStories from "./components/SuccessStories/SuccessStories";

// Utils
import NeuralBackground from "./utils/NeuralBackground";

function App() {
  return (
    <Router>
      {/* Background effect (always visible behind everything) */}
      <NeuralBackground />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/counselling" element={<CounsellingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/program" element={<Program />} />
        <Route path="/signup" element={<SignupForm />} />

        <Route path="/wordbyword" element={<Wordbyword />} />
        <Route path="/success-stories" element={<SuccessStories />} />

        <Route path="/ai" element={<Ai/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/resource" element={<Resource/>} />
        <Route path="/admin" element={<Admin/>} />

      </Routes>

      
    </Router>
  );
}

export default App;
