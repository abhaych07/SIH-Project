import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./bubbles.css";
import "./Button.css";

// Import Pages
import HomePage from "./HomePage.jsx";
import ChatbotPage from "./ChatbotPage.jsx";
import CounsellingPage from "./CounsellingPage.jsx";
import ResourcesPage from "./ResourcesPage.jsx";
import ProfilePage from "./ProfilePage.jsx";

// Import Components
import SignupForm from "./SignupForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/counselling" element={<CounsellingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
