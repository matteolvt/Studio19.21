import React from "react";
import "./ProjectDetailProcess.css";

const ProjectProcess = ({ project }) => {
  // Sécurité : Si pas de data process, on n'affiche rien pour ne pas casser la page
  if (!project || !project.process) return null;

  const { text, images } = project.process;

  return (
    <section className="project-process">
      <div className="process-container">
        {/* Partie Texte (Narrative) */}
        <div className="process-header">
          <span className="process-label">Le Processus</span>
          <h2 className="process-title">De la recherche à la conception</h2>
          <p className="process-description">{text}</p>
        </div>

        {/* Partie Visuelle (Images) */}
        {/* On vérifie qu'il y a bien des images avant de rendre la grille */}
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
                  {/* Légende dynamique simple : Étape 01, Étape 02... */}
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

export default ProjectProcess;
