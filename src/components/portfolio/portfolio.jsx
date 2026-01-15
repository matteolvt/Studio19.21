import React, { useRef } from "react";
import scene from "../../assets/projectPics/portfolio/scene.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: scene,
    title: "Projet interne — Portfolio 3D",
    icon: "📖",
  },
];

export default function Portfolio() {
  const container = useRef(null);
  const image = useRef(null);
  const text = useRef(null);
  const slidesContainer = useRef(null);

  const setNavbarHidden = (isHidden) => {
    const event = new CustomEvent("portfolioActive", {
      detail: { active: isHidden },
    });
    window.dispatchEvent(event);
  };

  useGSAP(
    () => {
      const getScale = () => {
        if (!image.current) return 1;
        const rect = image.current.getBoundingClientRect();
        const scaleX = window.innerWidth / rect.width;
        const scaleY = window.innerHeight / rect.height;
        return Math.max(scaleX, scaleY) * 1.05;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,

          onToggle: (self) => setNavbarHidden(self.isActive),

          onLeave: () => setNavbarHidden(false),
          onLeaveBack: () => setNavbarHidden(false),
        },
      });

      tl.to(
        image.current,
        {
          scale: () => getScale(),
          borderRadius: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "phase1"
      )

        .to(
          text.current,
          {
            opacity: 0,
            y: -100,
            duration: 0.5,
            ease: "power2.in",
          },
          "phase1"
        )

        .to(slidesContainer.current, {
          autoAlpha: 1,
          duration: 0.1,
        })

        .to(".portfolio-slide", {
          clipPath: "inset(0% 0 0 0)",
          stagger: 1,
          duration: 1,
          ease: "none",
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
