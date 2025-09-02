import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './bubbles.css'
import './Button.css'
import React from "react";
import NeuralBackground from "./NeuralBackground.jsx"
import Navbar from './Navbar.jsx'
import Landing from './Landing.jsx'
import  WordByWordText from './Wordbyword.jsx'
import MoodSelector from './Mood.jsx'
import Program from './Program.jsx'
import Card from './Card.jsx'



function App() {
  return (
    <div>
      <NeuralBackground/>
      <div style={{ position: "relative", zIndex: 1, padding: "0rem" }}>
        <Navbar/>
        <h1 className="flashing-text">WELCOME LEARNERS!</h1>
        <div style={{ padding: "50px", height: "30vh" }}>
      <WordByWordText 
        text=" Our mission is to build a Digital Psychological Intervention System that is accessible, stigma-free, and tailored to the cultural and institutional context of Indian higher education." 
        speed={10} 
      />
      <br />
      <WordByWordText 
        text=" Our platform integrates AI-guided first-aid support, confidential counselling booking, psychoeducational resources, peer support communities, and real-time analytics—all in one place." 
        speed={10} 
      />
    </div>
    <span> <button className="slide-up-btn">Explore More ↓</button></span>&nbsp; &nbsp;
    <span> <button className="slide-up-btn">Sign Up</button></span>
    <div className="mood">
      <MoodSelector/>
    </div>
    <Program/>
    <h1 className="success">Student&nbsp; <span style={{color:"blue"}}>Success &nbsp;Stories</span></h1>
    <p className='para'>Hear from students who transformed their academic journey though our 3D counselling platform</p>
     <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Card
        title="Arpit Solanki"
        description="Hear how Arpit overcame her academic anxiety with guided sessions."
        image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        title="Harsh Rai"
        description="Harsh shares his journey to improve sleep with our platform."
        image="https://img.freepik.com/fotos-premium/retrato-hombre-barbudo-sombrio-serio-elegante-peinado-posando_160360-855.jpg?w=360"
      />
      <Card
        title="Devanshu Jain"
        description="Devanshu shares his journey to improve anger with our platform."
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
      />
    </div>
    <footer>
      <h3>Connect Us</h3>
      <ul>
        <li>Email</li>
        <li>Phone Number</li>
        <li>Website</li>
        <li>Counselling</li>
      </ul>
      <p>2025 Copyright &copy; || All Rights Reserved &copy; </p>
    </footer>
        
      </div>
    </div>
  );
}

export default App;