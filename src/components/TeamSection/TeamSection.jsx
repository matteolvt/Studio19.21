import React from "react";
import "./TeamSection.css";

const founders = [
  {
    name: "Julliat Tom",
    role: "Développeur Back-End",
    bio: "Expert en architecture et performance, je m'assure que chaque site soit rapide et sécurisé.",
    funFact: "Fan de jeux vidéo et de café🎮",
  },
  {
    name: "Mattéo Livrozet",
    role: "Développeur Front-End",
    bio: "Passionné par les interfaces et le design, je crée des expériences utilisateurs fluides et esthétiques.",
    funFact: "Amateur de café et de nouvelles typographies ☕",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="section-title">Notre équipe</h2>
      <div className="team-container">
        {founders.map((founder, idx) => (
          <div key={idx} className="team-card">
            <div className="team-image">
              <div className="placeholder-img">👤</div>
            </div>
            <div className="team-content">
              <h3>{founder.name}</h3>
              <p className="role">{founder.role}</p>
              <p className="bio">{founder.bio}</p>
              <p className="fun-fact">
                <strong>Fun fact :</strong> {founder.funFact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
