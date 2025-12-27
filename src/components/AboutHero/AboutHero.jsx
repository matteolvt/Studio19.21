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
        Studio 19.21 est né d&apos;une conviction simple : le web artisanal
        surpasse l&apos;industriel. Nous façonnons des sites uniques qui
        reflètent l&apos;âme de votre projet.
      </p>
    </section>
  );
};

export default AboutHero;
