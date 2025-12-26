import React, { useState } from "react";
import "./about.css";

const About = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const values = [
    {
      icon: "✨",
      title: "Approche Artisanale",
      description:
        "Chaque projet est unique. Nous prenons le temps de comprendre votre vision et créons des solutions sur-mesure, loin des templates génériques.",
    },
    {
      icon: "⚡",
      title: "Excellence Technique",
      description:
        "Code propre, performances optimales, et standards web respectés. Nous construisons des fondations solides pour la pérennité de votre projet.",
    },
    {
      icon: "💎",
      title: "Design Raffiné",
      description:
        "L'esthétique rencontre la fonctionnalité. Nos interfaces allient beauté visuelle et expérience utilisateur intuitive.",
    },
    {
      icon: "🤝",
      title: "Transparence Totale",
      description:
        "Communication claire, délais respectés, et vous êtes impliqué à chaque étape. Pas de surprises, que des résultats.",
    },
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Maison Aurora",
      project: "E-commerce premium",
      text: "Studio 19.21 a transformé notre vision en une boutique en ligne exceptionnelle. Leur attention aux détails et leur professionnalisme ont dépassé nos attentes.",
      image: "👩‍💼",
    },
    {
      name: "Thomas Laurent",
      company: "Studio Nox",
      project: "Site vitrine",
      text: "Une collaboration fluide et un résultat époustouflant. Notre nouveau site reflète parfaitement l'identité de notre studio créatif.",
      image: "👨‍💼",
    },
    {
      name: "Sophie Martin",
      company: "Atelier Lumière",
      project: "Application web",
      text: "Réactivité, créativité et expertise technique. L'équipe a su traduire nos besoins complexes en une solution élégante et performante.",
      image: "👩‍💻",
    },
  ];

  const stats = [
    { number: "15+", label: "Projets Réalisés" },
    { number: "98%", label: "Clients Satisfaits" },
    { number: "3", label: "Années d'Expérience" },
    { number: "24h", label: "Temps de Réponse" },
  ];

  const faqs = [
    {
      question: "Pourquoi choisir une petite agence comme Studio 19.21 ?",
      answer:
        "Une petite structure signifie une attention personnalisée, une communication directe et une flexibilité accrue. Vous travaillez directement avec les créateurs de votre projet, sans intermédiaires.",
    },
    {
      question: "Travaillez-vous avec des clients internationaux ?",
      answer:
        "Absolument ! Bien que basés en France, nous collaborons avec des clients partout dans le monde. La communication à distance fait partie de notre quotidien.",
    },
    {
      question: "Quelle est votre zone géographique d'intervention ?",
      answer:
        "Principalement en Île-de-France pour les rencontres physiques, mais nous travaillons sur des projets partout en France et à l'international en distanciel.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-about">
        <div className="container">
          <p className="label">QUI SOMMES-NOUS</p>
          <h1>
            Nous créons des expériences digitales{" "}
            <span className="italic">mémorables</span>.
          </h1>
          <p className="hero-subtitle">
            Studio 19.21 est né de la conviction qu&apos;un site web ne devrait
            jamais être simplement fonctionnel, mais véritablement remarquable.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="story-section">
        <div className="container-narrow">
          <h2>Notre Histoire</h2>
          <div className="story-content">
            <p>
              Tout a commencé en 2021, avec une simple idée : créer des sites
              web qui se démarquent vraiment. Dans un monde saturé de templates
              et de solutions standardisées, nous avons voulu ramener
              l&apos;approche artisanale dans le développement web.
            </p>
            <p>
              Chaque ligne de code, chaque pixel est pensé pour servir un
              objectif : donner vie à votre vision de la manière la plus
              élégante et performante possible. Nous ne créons pas des sites
              web, nous construisons des expériences digitales qui laissent une
              empreinte durable.
            </p>
            <p>
              Aujourd&apos;hui, Studio 19.21 c&apos;est une équipe passionnée
              qui combine expertise technique et sensibilité design pour
              transformer vos ambitions en réalité digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="values-section">
        <div className="container">
          <h2>Nos Valeurs</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="team-section">
        <div className="container-narrow">
          <h2>L&apos;Équipe</h2>
          <div className="team-card">
            <div className="team-image">👨‍💻</div>
            <div className="team-info">
              <h3>Alexandre Rousseau</h3>
              <p className="role">Fondateur & Développeur Full-Stack</p>
              <p className="bio">
                Développeur passionné depuis plus de 5 ans, j&apos;ai fondé
                Studio 19.21 pour allier excellence technique et créativité.
                Spécialisé en React, Node.js et design d&apos;interfaces, je
                transforme des idées complexes en solutions élégantes et
                performantes.
              </p>
              <p className="fun-fact">
                <strong>Fun fact :</strong> Je code toujours avec un café bien
                serré et du jazz en fond sonore ☕🎵
              </p>
              <div className="social-links">
                <a href="#linkedin">LinkedIn</a>
                <a href="#github">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Ce Que Disent Nos Clients</h2>
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <div className="testimonial-icon">❝</div>
              <p className="testimonial-text">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[activeTestimonial].image}
                </div>
                <div className="author-info">
                  <div className="author-name">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="author-company">
                    {testimonials[activeTestimonial].company} •{" "}
                    {testimonials[activeTestimonial].project}
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    index === activeTestimonial ? "active" : ""
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container-narrow">
          <h2>Questions Fréquentes</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${
                    activeFaq === index ? "active" : ""
                  }`}
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="container">
          <h2>Prêt à Transformer Votre Présence Digitale ?</h2>
          <p>Parlons de vos ambitions autour d&apos;un café.</p>
          <div className="cta-buttons">
            <button className="btn-primary-large">
              Commencer la Discussion →
            </button>
            <button className="btn-secondary-large">Voir Nos Projets</button>
          </div>
          <p className="cta-note">Réponse sous 24h • Sans engagement</p>
        </div>
      </section>
    </div>
  );
};

export default About;
