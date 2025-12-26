import React from "react";
import "./FaqSection.css";

const FaqSection = () => {
  return (
    <section className="faq-section">
      <h2>Questions fréquentes</h2>
      <div className="faq-container">
        <div className="faq-item">
          <h5>Combien de temps pour créer un site ?</h5>
          <p>
            Pour l'offre Essentielle, comptez environ 2 semaines. L'offre
            Signature nécessite 4 à 6 semaines.
          </p>
        </div>
        <div className="faq-item">
          <h5>Proposez-vous la maintenance ?</h5>
          <p>
            Oui, nous proposons des forfaits mensuels pour assurer la sécurité
            et les mises à jour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
