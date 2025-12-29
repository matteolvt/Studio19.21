import React from "react";
import PropTypes from "prop-types";
import "./ProjectDetailProcess.css";

const ProjectProcess = ({ project }) => {
  if (!project || !project.process) return null;

  const { text, images } = project.process;

  return (
    <section className="project-process">
      <div className="process-container">
        <div className="process-header">
          <span className="process-label">Le Processus</span>
          <h2 className="process-title">De la recherche à la conception</h2>
          <p className="process-description">{text}</p>
        </div>

        {images && images.length > 0 && (
          <div className="process-gallery">
            {images.map((imgSrc, index) => (
              <div className="process-card" key={index}>
                <div className="process-image-wrapper">
                  <img
                    src={imgSrc}
                    alt={`Étape du processus ${index + 1} - ${project.title}`}
                    className="process-image"
                  />
                </div>
                <div className="image-caption">
                  PHASE {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

ProjectProcess.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    process: PropTypes.shape({
      text: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default ProjectProcess;
