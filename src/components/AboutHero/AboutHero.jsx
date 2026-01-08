import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <span className="subtitle">NOTRE IDENTITÉ</span>
      <h1>
        Studio 19.21 : <br />
        votre <span className="italic">partenaire digital</span> de confiance.
      </h1>
      <p className="hero-text">
        Fondé par Mattéo Livrozet & Julliat Tom à Lyon, Studio 19.21 accompagne les entreprises
        ambitieuses dans la création d’expériences digitales sur-mesure, alliant design, performance et visibilité. 
        Nous ne créons pas juste des sites web : nous racontons votre histoire.
      </p>
    </section>
  );
};

export default AboutHero;
