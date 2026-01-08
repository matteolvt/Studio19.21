import React from "react";
import "./StorySection.css";

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-content">
        <h2>Notre histoire</h2>
        <div className="story-text">
          <p>
            Tout a commencé avec une idée simple : proposer une alternative aux agences
            web impersonnelles et standardisées. Mattéo et Tom, passionné de code et de design,
            ont fondé Studio 19.21 pour créer des sites qui reflètent l&apos;identité unique de chaque client.
          </p>
          <p>
            Chaque projet est une collaboration. Nous prenons le temps de comprendre
            votre vision, vos besoins et vos valeurs pour transformer votre idée
            en un site web performant, élégant et durable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
