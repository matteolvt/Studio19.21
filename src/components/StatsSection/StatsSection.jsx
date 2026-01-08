import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
    const stats = [
    {
      number: "1",
      label: "Interlocuteur Unique",
      sub: "De la conception à la mise en ligne",
    },
    {
      number: "24h",
      label: "Réactivité",
      sub: "Réponse garantie sous 24h",
    },
    {
      number: "4",
      label: "Semaines",
      sub: "Délai moyen de livraison",
    },
    {
      number: "100%",
      label: "Sites Sur-Mesure",
      sub: "Pas de templates pré-faits",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-sub">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
