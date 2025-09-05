import React from "react";
import './SuccessStories.css';
import Card from "../Card/Card";

function SuccessStories() {
  return (
    <div>
      <h1 className="success">
        Student <span style={{ color: "blue" }}>Success Stories</span>
      </h1>
      <p className="para">
        Hear from students who transformed their academic journey through our 3D counselling platform
      </p>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Card
          title="Arpit Solanki"
          description="Hear how Arpit overcame her academic anxiety with guided sessions."
          image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000"
        />
        <Card
          title="Harsh Rai"
          description="Harsh shares his journey to improve sleep with our platform."
          image="https://img.freepik.com/fotos-premium/retrato-hombre-barbudo-sombrio-serio-elegante-peinado-posando_160360-855.jpg?w=360"
        />
        <Card
          title="Devanshu Jain"
          description="Devanshu shares his journey to improve anger with our platform."
          image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000"
        />
      </div>
    </div>
  );
}

export default SuccessStories;
