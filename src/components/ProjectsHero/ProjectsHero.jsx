// src/components/projects/ProjectsHero.jsx
import React from "react";
import "./ProjectsHero.css";

const ProjectsHero = () => {
  return (
    <section className="projects-hero">
      <span className="subtitle">NOS PROJETS</span>
      <h1>
        Découvrez nos <span className="italic">créations</span> sur-mesure.
      </h1>
      <p className="hero-text">
        Une sélection de projets qui témoignent de notre expertise en design et
        développement. Chaque réalisation est unique et pensée pour atteindre
        vos objectifs.
      </p>
    </section>
  );
};

export default ProjectsHero;
