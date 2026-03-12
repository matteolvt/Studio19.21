import React from "react";
import "./BlogHero.css";

export default function BlogHero() {
  return (
    <section className="blog-hero">
      <span className="subtitle">NOTRE BLOG</span>
      <h1>
        Nos <span className="italic">conseils</span> pour vos projets.
      </h1>
      <p className="hero-text">
        Découvrez nos articles et retours d'expérience sur le design,
        le développement web et la stratégie digitale.
      </p>
    </section>
  );
}
