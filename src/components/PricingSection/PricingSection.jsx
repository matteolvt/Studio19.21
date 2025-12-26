import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: "Essentiel",
      tagline: "L'indispensable pour exister.",
      price: "690€",
      features: [
        "Site One-Page",
        "Design responsive",
        "Intégration CMS",
        "SEO de base",
      ],
      isFeatured: false,
    },
    {
      id: 2,
      name: "Signature",
      tagline: "L'expérience de marque complète.",
      price: "990€",
      features: [
        "Site vitrine (5 pages)",
        "DA sur-mesure",
        "Animations fluides",
        "SEO Avancé",
        "Formation admin",
      ],
      isFeatured: true,
    },
    {
      id: 3,
      name: "Sur-Mesure",
      tagline: "Pour les écosystèmes complexes.",
      price: "Sur devis",
      features: [
        "E-commerce ou Web App",
        "Fonctionnalités avancées",
        "Design UX/UI",
        "Support prioritaire",
      ],
      isFeatured: false,
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.isFeatured ? "featured" : ""}`}
          >
            {plan.isFeatured && <span className="badge">Recommandé</span>}

            <div className="card-header">
              <h3>{plan.name}</h3>
              <p className="tagline">{plan.tagline}</p>
            </div>

            <div className="price">
              {plan.price}{" "}
              <span className="ht">{plan.price !== "Sur devis" && "HT"}</span>
            </div>

            <ul className="features-list">
              {plan.features.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span> {item}
                </li>
              ))}
            </ul>

            <button className="cta-button">Demander un devis</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
