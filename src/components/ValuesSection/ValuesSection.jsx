import React from "react";
import { Gem, Zap, HeartHandshake, ShieldCheck } from "lucide-react";
import "./ValuesSection.css";

const ValuesSection = () => {
  const values = [
    {
      icon: <Gem strokeWidth={1.5} size={32} />,
      title: "Sur-Mesure",
      desc: "Chaque site que nous créons est unique. Nous adaptons design et fonctionnalités à votre vision.",
    },
    {
      icon: <Zap strokeWidth={1.5} size={32} />,
      title: "Performance",
      desc: "Nos sites sont rapides et optimisés pour offrir une expérience utilisateur fluide et agréable.",
    },
    {
      icon: <HeartHandshake strokeWidth={1.5} size={32} />,
      title: "Proximité",
      desc: "Vous parlez directement avec le fondateur et l’équipe technique. Pas de service client impersonnel.",
    },
    {
      icon: <ShieldCheck strokeWidth={1.5} size={32} />,
      title: "Fiabilité",
      desc: "Technologies modernes, maintenance proactive et sécurité maximale pour votre site.",
    },
  ];

  return (
    <section className="values-section">
      <div className="container-values">
        <h2 className="section-title">Nos Valeurs</h2>
        <div className="values-grid">
          {values.map((val, index) => (
            <div key={index} className="value-card">
              <div className="icon-box">{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
