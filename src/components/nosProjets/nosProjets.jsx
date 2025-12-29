import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nosProjets.css";
import { categories, projectsData } from "../../data/projectsData";

const NosProjets = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const getProjectCount = (categoryId) => {
    if (categoryId === "all") return projectsData.length;
    return projectsData.filter((project) =>
      project.categoryIds.includes(categoryId)
    ).length;
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categoryIds.includes(activeFilter);
  });

  return (
    <section className="projects-section">
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeFilter === cat.id ? "active" : ""}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.label}
            <span className="filter-count">{getProjectCount(cat.id)}</span>
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project) => {
          const projectTags = categories.filter(
            (cat) => cat.id !== "all" && project.categoryIds.includes(cat.id)
          );

          return (
            // MODIFICATION ICI : On utilise project.slug au lieu de project.id
            <Link
              to={`/projets/${project.slug}`}
              key={project.id}
              className="project-card"
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-info">
                <div className="info-top">
                  <span className="project-year">{project.year}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="info-bottom">
                  <div className="project-tags">
                    {projectTags.map((cat) => (
                      <span key={cat.id} className="tag">
                        {cat.label}
                      </span>
                    ))}
                  </div>

                  <div className="project-btn">
                    Voir le projet <span className="arrow">→</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default NosProjets;
