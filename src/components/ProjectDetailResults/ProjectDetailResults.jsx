import React from "react";
import PropTypes from "prop-types";
import "./ProjectDetailResults.css";

const ProjectResults = ({ project }) => {
  if (!project || !project.results) return null;

  const { kpis, testimonial } = project.results;

  return (
    <section className="project-results">
      <div className="results-container">
        {/* Affichage des KPIs s'il y en a */}
        {kpis && kpis.length > 0 && (
          <div className="results-kpis">
            {kpis.map((kpi, index) => (
              <div className="kpi-item" key={index}>
                <span className="kpi-value">{kpi.value}</span>
                <span className="kpi-label">{kpi.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Affichage du témoignage s'il y en a un */}
        {testimonial && (
          <div className="results-testimonial">
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">— {testimonial.author}</p>
          </div>
        )}
      </div>
    </section>
  );
};

ProjectResults.propTypes = {
  project: PropTypes.shape({
    results: PropTypes.shape({
      kpis: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string,
        })
      ),
      testimonial: PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ProjectResults;
