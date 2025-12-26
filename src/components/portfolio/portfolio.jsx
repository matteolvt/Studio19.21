import React, { useRef, useEffect } from "react";
import "./portfolio.css";

const projects = [
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop", title: "100% Human-grade ingredients", icon: "🥩" },
  { image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2666&auto=format&fit=crop", title: "Nutritionist formulated & vet approved", icon: "🐾" },
  { image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2666&auto=format&fit=crop", title: "Delivered fresh to your door", icon: "🚚" },
];

export default function Portfolio() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const slidesRef = useRef(null);

  const progressRef = useRef(0);

  const animate = () => {
    const prog = progressRef.current * (projects.length - 1);
    const currentSlide = Math.round(prog);

    // Animation principale
    const scale = 1 + prog * 0.5;
    const borderRadius = 24 * (1 - prog / (projects.length - 1));

    if (imageRef.current && textRef.current && slidesRef.current) {
      imageRef.current.style.transform = `scale(${scale})`;
      imageRef.current.style.borderRadius = `${borderRadius}px`;
      textRef.current.style.opacity = `${1 - prog / (projects.length - 1)}`;
      textRef.current.style.transform = `translateY(${-prog * 20}%)`;

      const slides = slidesRef.current.querySelectorAll(".portfolio-slide");
      slides.forEach((slide, index) => {
        slide.style.opacity = index === currentSlide ? 1 : 0;
        slide.style.pointerEvents = index === currentSlide ? "auto" : "none";
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

      if (visibleHeight > 0) {
        const localProg = 1 - (rect.bottom - viewportHeight) / rect.height;
        progressRef.current = Math.min(Math.max(localProg, 0), 1);
        requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="portfolio-track">
      <div className="portfolio-sticky">
        <div ref={textRef} className="portfolio-text">
          <h3>NOS RÉALISATIONS</h3>
          <h2>Voici une sélection de nos projets.</h2>
        </div>

        <div className="portfolio-image-wrapper">
          <div ref={imageRef} className="portfolio-image">
            <img src={projects[0].image} alt={projects[0].title} />
          </div>
        </div>

        <div ref={slidesRef} className="portfolio-slides">
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
      </div>
    </section>
  );
}
