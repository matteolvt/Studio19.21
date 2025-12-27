import React from "react";
import { Gem, Zap, HeartHandshake, ShieldCheck } from "lucide-react";
import "./ValuesSection.css";

const ValuesSection = () => {
  const values = [
    {
      icon: <Gem strokeWidth={1.5} size={32} />,
      title: "Sur-Mesure",
      desc: "Nous ne croyons pas aux solutions toutes faites. Votre identité mérite un écrin unique.",
    },
    {
      icon: <Zap strokeWidth={1.5} size={32} />,
      title: "Performance",
      desc: "Un site beau c'est bien, un site rapide et optimisé c'est mieux. Nous ne sacrifions rien.",
    },
    {
      icon: <HeartHandshake strokeWidth={1.5} size={32} />,
      title: "Proximité",
      desc: "Un interlocuteur unique, disponible et pédagogue. Nous avançons main dans la main.",
    },
    {
      icon: <ShieldCheck strokeWidth={1.5} size={32} />,
      title: "Fiabilité",
      desc: "Des technologies modernes et robustes pour un site pérenne et sécurisé.",
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
