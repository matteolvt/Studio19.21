import React from "react";
import PropTypes from "prop-types";
import "./ProjectDetailOverview.css";

const ProjectDetailOverview = ({ project }) => {
  if (!project) return null;

  return (
    <section className="project-overview">
      <div className="overview-container">
        <div className="overview-grid">
          {/* Colonne Gauche : Storytelling */}
          <div className="overview-challenge">
            <h2>Le Défi</h2>
            <p className="challenge-text">{project.challenge}</p>
            {project.description && (
              <p className="challenge-description">{project.description}</p>
            )}
          </div>

          {/* Colonne Droite : Fiche Technique */}
          <div className="overview-meta">
            <div className="meta-item">
              <span className="meta-label">Rôle</span>
              <span className="meta-value">{project.role}</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Client</span>
              <span className="meta-value">{project.client}</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Durée</span>
              <span className="meta-value">{project.timeline}</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Catégorie</span>
              {/* On map les catégories si c'est un tableau */}
              <span className="meta-value">
                {Array.isArray(project.categoryIds)
                  ? project.categoryIds.join(", ")
                  : "Web Design"}
              </span>
            </div>

            {/* Stack Technique sur toute la largeur */}
            <div className="meta-item" style={{ gridColumn: "1 / -1" }}>
              <span className="meta-label">Stack Technique</span>
              <ul className="tech-stack-list">
                {project.techStack &&
                  project.techStack.map((tech, index) => (
                    <li key={index} className="tech-tag">
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectFeatures.propTypes = {
  project: PropTypes.shape({
    features: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default ProjectDetailOverview;
