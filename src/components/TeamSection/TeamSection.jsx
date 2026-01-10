import React from "react";
import "./TeamSection.css";
// Si tu as installé lucide-react ou fontawesome, importe les icônes ici.
// Sinon, j'utilise des emojis ou du texte simple pour l'exemple.

const teamMembers = [
  {
    name: "Tom Julliat",
    role: "Développeur Back End",
    subtitle: "CO-FONDATEUR",
    bio: "Expert en architecture et performance, je m'assure que chaque site soit rapide et sécurisé.",
    funFact: "Fan de jeux vidéo et de café 🎮",
    image: null, // Mettre le chemin de l'image ici
    links: {
      linkedin: "https://www.linkedin.com/in/tom-julliat-web-dev-lyon/",
      github: "https://github.com/ShayyNwE",
    },
  },
  {
    name: "Matteo Livrozet",
    role: "Développeur Full-Stack & Designer",
    subtitle: "CO-FONDATEUR",
    bio: "Je suis le pont entre votre vision et l’écran.\nJe transforme des concepts abstraits en interfaces fluides et intuitives, avec une attention extrême portée à chaque pixel et chaque animation.",
    funFact:
      "Je passe souvent plus de temps sur les détails que sur les fonctionnalités visibles.",
    image: null,
    links: {
      linkedin:
        "https://www.linkedin.com/in/matteo-livrozet-lyon-developpement-web/",
      github: "https://github.com/matteolvt",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="section-header">
        <span className="section-tag">L'ÉQUIPE</span>
        <h3>Les visages derrière le code</h3>
      </div>

      <div className="team-wrapper">
        {teamMembers.map((member, index) => {
          // Si l'index est impair (1, 3...), on inverse la direction
          const isReversed = index % 2 !== 0;

          return (
            <div
              className={`team-container ${isReversed ? "reversed" : ""}`}
              key={index}
            >
              {/* Partie Image */}
              <div className="team-image-wrapper">
                <div className="team-image">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <div className="placeholder-img">👨‍💻</div>
                  )}
                </div>
              </div>

              {/* Partie Texte */}
              <div className="team-content">
                <div className="header-group">
                  <span className="subtitle">{member.subtitle}</span>
                  <h2>{member.name}</h2>
                  <p className="role">{member.role}</p>
                </div>

                <p className="bio">{member.bio}</p>

                <div className="fun-fact">
                  <strong>Fun fact :</strong> {member.funFact}
                </div>

                {/* Ajout des liens sociaux */}
                <div className="social-links">
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
