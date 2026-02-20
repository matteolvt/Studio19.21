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
          loading="eager"
          fetchpriority="high"
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

ProjectDetailHero.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectDetailHero;
