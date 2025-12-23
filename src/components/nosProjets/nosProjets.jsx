import React, { useState } from "react";
import "./nosProjets.css";

// --- DONNÉES ---
const categories = [
  { id: "all", label: "Tous" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "webapp", label: "Application web" },
  { id: "vitrine", label: "Site vitrine" },
];

const projectsData = [
  {
    id: 1,
    title: "Maison Aurora",
    year: 2024,
    description:
      "Création d’une plateforme e-commerce premium pour une marque de décoration.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop",
    categoryIds: ["ecommerce", "webapp"],
    link: "#",
  },
  {
    id: 2,
    title: "Studio Nox",
    year: 2023,
    description: "Site vitrine minimaliste pour un studio créatif.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop",
    categoryIds: ["vitrine"],
    link: "#",
  },
  // Ajoute d'autres projets ici pour tester...
];

const NosProjets = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categoryIds.includes(activeFilter);
  });

  return (
    <section className="projects-section">
      <h2 className="section-title">NOS PROJETS</h2>

      {/* --- MENU DE FILTRES --- */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeFilter === cat.id ? "active" : ""}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* L'astuce est ici : key={activeFilter} 
         Quand la clé change, React "détruit" et "recrée" la grille,
         ce qui relance l'animation CSS "fadeInUp".
      */}
      <div className="projects-container" key={activeFilter}>
        {filteredProjects.map((project) => {
          const projectTags = categories.filter(
            (cat) => cat.id !== "all" && project.categoryIds.includes(cat.id)
          );

          return (
            <a href={project.link} key={project.id} className="project-card">
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
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default NosProjets;
