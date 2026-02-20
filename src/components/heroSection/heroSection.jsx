import React from "react";
import "./heroSection.css";
import heroMac from "../../assets/macbook.webp";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          CRÉONS VOTRE
          <br />
          FUTUR DIGITAL.
        </h1>
        <p>
          Nous sommes une Agence Web basée à Lyon qui accompagne les entreprises
          dans la création d’expériences digitales sur mesure, alliant design,
          performance et visibilité.
        </p>
        <button id="hero-button" onClick={handleClick}>
          Prendre Rendez-vous
        </button>
      </div>
      <div className="hero-mac">
        <img src={heroMac} alt="Macbook" />
      </div>
    </section>
  );
};

export default HeroSection;
