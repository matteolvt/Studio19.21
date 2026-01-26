import React from "react";
import "./ProcessSection.css";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Immersion",
      text: "Audit, stratégie et définition de vos objectifs.",
    },
    {
      number: "02",
      title: "Design",
      text: "Direction artistique et maquettage interactif.",
    },
    {
      number: "03",
      title: "Code",
      text: "Développement propre, performant et sécurisé.",
    },
    {
      number: "04",
      title: "Lancement",
      text: "Mise en ligne, tests et formation.",
    },
  ];

  return (
    <section className="process-section">
      <h2>Notre Processus</h2>
      <div className="process-grid">
        {steps.map((step) => (
          <div key={step.number} className="process-step">
            <span className="step-number">{step.number}</span>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
