import React from "react";
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

export default ProjectResults;
