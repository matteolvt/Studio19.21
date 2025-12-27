import React from "react";
import "./TeamSection.css";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        {/* Partie Image (Placeholder couleur unie pour l'instant ou ton image) */}
        <div className="team-image">
          {/* Si tu as une image: <img src="/path/to/alex.jpg" alt="Alexandre" /> */}
          <div className="placeholder-img">👨‍💻</div>
        </div>

        {/* Partie Texte */}
        <div className="team-content">
          <span className="subtitle">LE FONDATEUR</span>
          <h2>Alexandre Rousseau</h2>
          <p className="role">Développeur Full-Stack & Designer</p>
          <p className="bio">
            Passionné par le code et le design minimaliste, j&apos;ai fondé
            Studio 19.21 pour offrir une alternative aux grosses agences
            impersonnelles. Mon but ? Apporter une expertise technique pointue
            (React, Node.js) avec une sensibilité artistique.
          </p>
          <div className="fun-fact">
            <strong>Fun fact :</strong> Je code toujours avec un café (très)
            serré ☕.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
