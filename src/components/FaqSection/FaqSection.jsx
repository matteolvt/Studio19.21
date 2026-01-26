import React, { useState } from "react";
import "./FaqSection.css";

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "Combien de temps pour créer un site ?",
      answer:
        "Pour l'offre Essentielle, comptez environ 1 semaine. L'offre Signature nécessite 2 à 3 semaines.",
    },
    {
      question: "Proposez-vous la maintenance ?",
      answer:
        "Oui, nous proposons des forfaits mensuels pour assurer la sécurité et les mises à jour.",
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer:
        "Nous travaillons avec les technologies modernes : React, Next.js, Tailwind CSS, Node.js, et bien d'autres selon les besoins de votre projet.",
    },
    {
      question: "Puis-je voir mon site pendant le développement ?",
      answer:
        "Absolument ! Nous vous donnons accès à un environnement de prévisualisation tout au long du développement pour suivre l'avancement en temps réel.",
    },
    {
      question: "Proposez-vous un hébergement ?",
      answer:
        "Oui, nous pouvons gérer l'hébergement de votre site sur des plateformes performantes et sécurisées. Nous vous conseillons également si vous préférez gérer l'hébergement vous-même.",
    },
    {
      question: "Quelle est votre politique de révisions ?",
      answer:
        "Chaque offre inclut un nombre de révisions défini. L'offre Essentielle comprend 2 rounds de révisions, l'offre Signature en comprend 4, et l'offre Sur-Mesure est flexible selon vos besoins.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>Questions fréquentes</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeAccordion === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              <h5>{faq.question}</h5>
              <span className="faq-icon">
                {activeAccordion === index ? "−" : "+"}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
