import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./portfolio.css";

// On active le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop",
    title: "100% Human-grade ingredients",
    icon: "🥩",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2666&auto=format&fit=crop",
    title: "Nutritionist formulated & vet approved",
    icon: "🐾",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2666&auto=format&fit=crop",
    title: "Delivered fresh to your door",
    icon: "🚚",
  },
];

export default function Portfolio() {
  const container = useRef(null);
  const image = useRef(null);
  const text = useRef(null);
  const slidesContainer = useRef(null);

  // Fonction pour gérer la navbar
  const setNavbarHidden = (isHidden) => {
    const event = new CustomEvent("portfolioActive", {
      detail: { active: isHidden },
    });
    window.dispatchEvent(event);
  };

  useGSAP(
    () => {
      // 1. Calcul dynamique du zoom max selon la taille de l'écran
      const getScale = () => {
        if (!image.current) return 1;
        const rect = image.current.getBoundingClientRect();
        const scaleX = window.innerWidth / rect.width;
        const scaleY = window.innerHeight / rect.height;
        return Math.max(scaleX, scaleY) * 1.05; // Petit bonus pour être sûr de couvrir
      };

      // 2. La Timeline Principale
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top", // Déclenche quand le HAUT du container touche le HAUT de l'écran
          end: "+=300%", // L'animation dure l'équivalent de 3 écrans de hauteur (réglable)
          pin: true, // BLOQUE la section (c'est ça qui empêche de sauter la section)
          scrub: 1, // Synchronise l'anim avec le scroll (1s de fluidité)
          anticipatePin: 1, // Évite les petits sauts au début

          // Gestion Navbar automatique
          onToggle: (self) => setNavbarHidden(self.isActive),
          // Sécurité si on quitte la page
          onLeave: () => setNavbarHidden(false),
          onLeaveBack: () => setNavbarHidden(false),
        },
      });

      // --- SÉQUENCE D'ANIMATION ---

      // ÉTAPE A : Zoom Image + Disparition Texte
      tl.to(
        image.current,
        {
          scale: () => getScale(), // Utilise une fonction pour recalculer si resize
          borderRadius: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "phase1"
      ) // Label pour synchroniser

        .to(
          text.current,
          {
            opacity: 0,
            y: -100,
            duration: 0.5,
            ease: "power2.in",
          },
          "phase1"
        ) // Se joue en même temps que le zoom

        // ÉTAPE B : Apparition du conteneur de slides
        .to(slidesContainer.current, {
          autoAlpha: 1, // visible + opacity 1
          duration: 0.1,
        })

        // ÉTAPE C : Défilement des slides
        // On sélectionne toutes les slides via leur classe CSS
        .to(".portfolio-slide", {
          clipPath: "inset(0% 0 0 0)", // Dévoilement complet
          stagger: 1, // Attendre 1 temps entre chaque slide
          duration: 1, // Chaque slide prend 1 temps à s'afficher
          ease: "none", // Linéaire pour que ça suive bien le scroll
        });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="portfolio-section">
      {/* TEXTE D'ACCROCHE */}
      <div ref={text} className="portfolio-text">
        <h3>NOS RÉALISATIONS</h3>
        <h2>Voici une sélection de nos projets.</h2>
      </div>

      {/* IMAGE PRINCIPALE (Celle qui zoom) */}
      <div className="portfolio-image-wrapper">
        <div ref={image} className="portfolio-image">
          <img src={projects[0].image} alt="Projet Principal" />
        </div>
      </div>

      {/* SLIDES (Overlay) */}
      <div ref={slidesContainer} className="portfolio-slides">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-slide">
            <img src={project.image} alt={project.title} />
            <div className="portfolio-slide-content">
              <div className="portfolio-slide-icon">{project.icon}</div>
              <h2 className="portfolio-slide-title">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
