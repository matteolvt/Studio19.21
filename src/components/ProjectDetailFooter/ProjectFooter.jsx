import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ProjectFooter.css";

const ProjectFooter = ({ project, nextProject }) => {
  if (!project) return null;

  return (
    <footer className="project-footer">
      {/* 1. Boutons d'action (Liens externes) */}
      <div className="footer-actions">
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-action btn-primary"
          >
            Voir le site live
          </a>
        )}

        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-action btn-outline"
          >
            Voir le code (GitHub)
          </a>
        )}
      </div>

      {/* 2. Carte Projet Suivant */}
      {nextProject && (
        <div className="next-project-container">
          <span className="next-label">Projet Suivant</span>

          <Link
            to={`/projets/${nextProject.slug}`}
            className="next-project-card"
          >
            <img
              src={nextProject.image}
              alt="Next project cover"
              className="next-bg-image"
            />
            <div className="next-content">
              <h3 className="next-title">{nextProject.title}</h3>
              <span className="next-arrow">→</span>
            </div>
          </Link>
        </div>
      )}
    </footer>
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

export default ProjectFooter;
