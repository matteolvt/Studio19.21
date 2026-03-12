import React, { useState } from "react";
import "./FaqSection.css";

const defaultFaqs = [
  {
    question: "Combien de temps pour créer un site ?",
    answer:
      "Pour l'offre Essentielle, comptez environ 1 semaine à partir de la validation du devis et de la réception de vos contenus (textes, photos). L'offre Signature nécessite 2 à 3 semaines selon la complexité des fonctionnalités. Ces délais incluent une phase de maquette, le développement, et les allers-retours de révision. Tout est planifié dès le départ pour que vous sachiez exactement où en est votre projet.",
  },
  {
    question: "Proposez-vous la maintenance ?",
    answer:
      "Oui, nous proposons des forfaits mensuels pour assurer la sécurité, les mises à jour techniques et la disponibilité de votre site. Cela inclut la surveillance des performances, les corrections de bugs éventuels et les petites évolutions de contenu. Vous pouvez ainsi vous concentrer sur votre activité sans vous soucier de la partie technique.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Nous travaillons avec les technologies modernes du web : React, Next.js, Tailwind CSS, Node.js, et bien d'autres selon les besoins de votre projet. Pour les sites vitrines artisanaux, nous privilégions des solutions légères et rapides en HTML/CSS/JS vanilla. Pour les applications plus complexes (e-commerce, SaaS), nous utilisons des frameworks robustes. Dans tous les cas, le choix technologique est guidé par vos besoins réels, pas par la mode.",
  },
  {
    question: "Puis-je voir mon site pendant le développement ?",
    answer:
      "Absolument. Dès le début du projet, vous avez accès à un lien de prévisualisation mis à jour en temps réel. Vous pouvez suivre l'avancement, donner vos retours directement et valider chaque étape avant la suivante. On travaille en totale transparence — pas de surprise à la livraison.",
  },
  {
    question: "Proposez-vous un hébergement ?",
    answer:
      "Oui, nous pouvons gérer l'hébergement de votre site sur des plateformes performantes, sécurisées et adaptées à votre trafic (Vercel, Firebase, OVH selon les cas). Nous nous occupons de la mise en ligne, du nom de domaine et des certificats SSL. Si vous préférez gérer l'hébergement vous-même, nous vous accompagnons dans la configuration et vous livrons un projet clé en main prêt à déployer.",
  },
  {
    question: "Quelle est votre politique de révisions ?",
    answer:
      "Chaque offre inclut un nombre de révisions défini et cadré dès le départ pour éviter les malentendus. L'offre Essentielle comprend 2 rounds de révisions, l'offre Signature en comprend 4. L'offre Sur-Mesure est entièrement flexible selon vos besoins. Une révision correspond à un ensemble de retours consolidés — nous vous encourageons donc à regrouper vos commentaires pour aller plus vite et plus efficacement.",
  },
];

const FaqSection = ({ faqs = defaultFaqs, title = "Questions fréquentes" }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>{title}</h2>
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