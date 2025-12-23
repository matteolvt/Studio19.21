import React from "react";
import { useState } from "react";
import "./heroSection.css";
import heroMac from "../../assets/macbook.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          CRÉONS VOTRE
          <br />
          FUTUR DIGITAL.
        </h1>
        <p>
          Nous accompagnons les entreprises dans la création d’expériences
          digitales sur mesure, alliant design, performance et visibilité.{" "}
        </p>
        <button id="hero-button">Prendre Rendez-vous</button>
      </div>
      <div className="hero-mac">
        <img src={heroMac} alt="Macbook" />
      </div>
    </section>
  );
};

export default HeroSection;
