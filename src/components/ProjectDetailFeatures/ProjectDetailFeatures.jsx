import React from "react";
import "./ProjectDetailFeatures.css";

const ProjectFeatures = ({ project }) => {
  // Sécurité : si pas de features, on n'affiche rien
  if (!project || !project.features || project.features.length === 0)
    return null;

  return (
    <section className="project-features">
      <div className="features-container">
        {project.features.map((feature, index) => (
          <div className="feature-row" key={index}>
            {/* Partie Texte */}
            <div className="feature-content">
              {/* Numéro 01, 02... */}
              <span className="feature-number">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>

              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>

            {/* Partie Visuelle */}
            <div className="feature-visual">
              <div className="feature-image-wrapper">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectFeatures;
