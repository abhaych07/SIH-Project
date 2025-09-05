import React from "react";
import "./Card.css"; // Import CSS file

function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">Read More</button>
      </div>
    </div>
  );
}

export default Card;
