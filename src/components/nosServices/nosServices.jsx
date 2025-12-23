import React, { useState } from "react";
import "./nosServices.css";

const servicesData = [
  {
    id: 1,
    number: "01",
    title: "Design & Identité",
    subServices: [
      "Web design sur mesure",
      "UI / UX design",
      "Refonte de site",
      "Création d’identité visuelle",
      "Design system",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Développement Web",
    subServices: [
      "Développement Front-end",
      "Développement Back-end",
      "Intégration CMS",
      "API REST & GraphQL",
      "Performance web",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "SEO & Visibilité",
    subServices: [
      "Audit SEO technique",
      "Stratégie de mots-clés",
      "Optimisation on-page",
      "Netlinking",
      "Campagnes Google Ads",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Maintenance",
    subServices: [
      "Mises à jour de sécurité",
      "Sauvegardes journalières",
      "Monitoring serveur",
      "Correction de bugs",
      "Support technique",
    ],
  },
];

const NosServices = () => {
  const [activeId, setActiveId] = useState(1);

  const handleToggle = (id) => {
    if (activeId !== id) {
      setActiveId(id);
    }
  };

  return (
    <section className="services-section">
      <h2 className="section-title">NOS SERVICES</h2>

      <div className="services-container">
        {servicesData.map((service) => {
          const isActive = activeId === service.id;

          return (
            <div
              key={service.id}
              className={`service-item ${isActive ? "active" : ""}`}
            >
              {/* --- PARTIE VISIBLE QUAND FERMÉ --- */}
              <div
                className="service-collapsed"
                onClick={() => handleToggle(service.id)}
              >
                <div className="closed-header">
                  <span className="closed-number">{service.number}</span>
                  <span className="closed-title">{service.title}</span>
                </div>
                <span className="arrow-icon">↗</span>
              </div>

              {/* --- PARTIE VISIBLE QUAND OUVERT --- */}
              <div className="service-expanded">
                <div className="expanded-inner">
                  <div className="card-content">
                    <div className="card-left">
                      <span className="card-number-large">
                        {service.number}
                      </span>
                    </div>

                    <div className="card-right">
                      <div>
                        <h3 className="card-title">{service.title}</h3>
                        <ul className="service-list">
                          {service.subServices.map((subItem, index) => (
                            <li key={index}>
                              <span className="dot"></span> {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="card-action">
                        <div className="btn-circle">→</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NosServices;
