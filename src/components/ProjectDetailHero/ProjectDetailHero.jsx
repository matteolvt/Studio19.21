import React from "react";
import PropTypes from "prop-types";
import "./ProjectDetailHero.css";

const ProjectDetailHero = ({ project }) => {
  if (!project) return null;

  return (
    <section className="project-hero">
      <div className="project-hero-background">
        <img
          src={project.image}
          alt={project.title}
          className="project-hero-image"
        />
        <div className="project-hero-overlay"></div>
      </div>

      <div className="project-hero-content">
        <div className="project-hero-meta">
          <span>{project.client}</span>
          <span style={{ margin: "0 12px" }}>—</span>
          <span>{project.year}</span>
        </div>

        <h1 className="project-hero-title">{project.title}</h1>

        <p className="project-hero-tagline">{project.tagline}</p>
      </div>

      <div className="scroll-indicator">
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
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

export default ProjectDetailHero;
