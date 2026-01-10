import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <span className="subtitle">NOTRE IDENTITÉ</span>
      <h1>
        Plus qu&apos;une agence, <br />
        votre <span className="italic">partenaire</span> digital.
      </h1>
      <p className="hero-text">
        Fondé par Tom Julliat & Mattéo Livrozet à Lyon, Studio 19.21 accompagne
        les entreprises ambitieuses dans la création d'expériences digitales
        sur-mesure. Alliant design minimaliste et performance technique, nous ne
        créons pas juste des sites web : nous racontons votre histoire.
      </p>
    </section>
  );
};

export default AboutHero;
