import React from "react";
import "./CtaSection.css";

const CtaSection = () => {
  return (
    <section className="final-cta">
      <h2>Un projet en tête ?</h2>
      <p>Parlons de vos ambitions autour d'un café.</p>
      <a href="/contact" className="link-cta">
        Commencer la discussion →
      </a>
    </section>
  );
};

export default CtaSection;
