import React, { useRef, useEffect } from "react";
import "./portfolio.css";

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
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const slidesRef = useRef(null);

  const progressRef = useRef(0);
  const slideProgressRef = useRef(0);
  const isLockedRef = useRef(false);

  // On stocke le facteur d'échelle max calculé
  const maxScaleRef = useRef(1);

  useEffect(() => {
    const el = containerRef.current;
    const imgEl = imageRef.current;
    const txtEl = textRef.current;
    const slidesEl = slidesRef.current;

    if (!el || !imgEl || !txtEl || !slidesEl) return;

    let touchStartY = 0;
    let isPointerDown = false;
    const MAX_PROGRESS = 1 + projects.length;

    // ============================================
    // 0. CALCUL DU SCALE FACTOR (Nouveau !)
    // ============================================
    const calculateMaxScale = () => {
      // On récupère la taille initiale de la boîte image
      const rect = imgEl.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // On calcule le ratio nécessaire en largeur et en hauteur
      const scaleX = viewportWidth / rect.width;
      const scaleY = viewportHeight / rect.height;

      // Pour couvrir tout l'écran (comme object-fit: cover),
      // il faut prendre le plus grand des deux ratios.
      // On ajoute un tout petit epsilon (1.01) pour éviter tout filet blanc.
      maxScaleRef.current = Math.max(scaleX, scaleY) * 1.01;
    };

    // Calcul initial
    calculateMaxScale();
    // Recalcul si la fenêtre change de taille
    window.addEventListener("resize", calculateMaxScale);

    // ============================================
    // 1. VISUEL (Corrigé)
    // ============================================
    const applyTransforms = (prog, slideProg) => {
      requestAnimationFrame(() => {
        // --- CORRECTION ICI ---
        // Au lieu de `scale = 1 + prog`, on utilise le scale calculé sur mesure.
        // Quand prog = 0 -> scale = 1 (taille initiale)
        // Quand prog = 1 -> scale = maxScaleRef.current (plein écran parfait)
        const currentScale = 1 + prog * (maxScaleRef.current - 1);

        const borderRadius = Math.max(0, 24 - prog * 24);
        const textOpacity = Math.max(0, 1 - prog / 0.2);
        const textTranslate = (-prog / 0.2) * 20;

        imgEl.style.transform = `scale(${currentScale})`;
        imgEl.style.borderRadius = `${borderRadius}px`;
        txtEl.style.opacity = textOpacity;
        txtEl.style.transform = `translateY(${textTranslate}%)`;

        if (prog >= 0.95) {
          const transitionProgress = Math.min(slideProg * 1.5, 1);
          imgEl.parentElement.style.opacity = Math.max(
            0,
            1 - transitionProgress
          );

          slidesEl.style.opacity = 1;
          slidesEl.style.pointerEvents = "auto";

          const slides = slidesEl.querySelectorAll(".portfolio-slide");
          slides.forEach((slide, index) => {
            const clipValue = Math.max(0, 100 - (slideProg - index) * 100);
            if (index <= Math.ceil(slideProg)) {
              slide.style.clipPath = `polygon(0% ${clipValue}%, 100% ${clipValue}%, 100% 100%, 0% 100%)`;
              slide.style.zIndex = index + 10;
            } else {
              slide.style.clipPath =
                "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
            }
          });
        } else {
          imgEl.parentElement.style.opacity = 1;
          slidesEl.style.opacity = 0;
          slidesEl.style.pointerEvents = "none";
        }
      });
    };

    // ============================================
    // 2. PROGRESSION (Inchangé)
    // ============================================
    const updateProgress = (deltaY) => {
      const totalProgress = progressRef.current + slideProgressRef.current;
      const sensitivity = 1500;
      const newTotal = totalProgress + deltaY / sensitivity;

      if (newTotal <= 1) {
        progressRef.current = Math.max(0, Math.min(1, newTotal));
        slideProgressRef.current = 0;
      } else {
        progressRef.current = 1;
        slideProgressRef.current = Math.max(
          0,
          Math.min(projects.length, newTotal - 1)
        );
      }

      applyTransforms(progressRef.current, slideProgressRef.current);
      return progressRef.current + slideProgressRef.current;
    };

    // ============================================
    // 3. LOGIQUE DE BLOCAGE (Inchangé)
    // ============================================
    const handleScroll = (e, deltaY) => {
      const sectionTop = el.offsetTop;
      const currentScroll = window.scrollY;
      const diff = currentScroll - sectionTop;

      const totalProgress = progressRef.current + slideProgressRef.current;
      const direction = deltaY > 0 ? "DOWN" : "UP";

      const isAtSection = diff >= -10 && diff <= 10;
      const isPastSection = diff > 10;

      // SCROLL DOWN
      if (direction === "DOWN") {
        if (
          isAtSection ||
          (isLockedRef.current && totalProgress < MAX_PROGRESS)
        ) {
          if (totalProgress < MAX_PROGRESS) {
            e.preventDefault();
            e.stopPropagation();
            isLockedRef.current = true;
            if (Math.abs(currentScroll - sectionTop) > 1) {
              window.scrollTo({ top: sectionTop, behavior: "auto" });
            }
            updateProgress(deltaY);
            return;
          }
        }
      }

      // SCROLL UP
      if (direction === "UP") {
        if (
          isAtSection ||
          isLockedRef.current ||
          (isPastSection && totalProgress > 0)
        ) {
          if (totalProgress > 0) {
            if (isPastSection && !isLockedRef.current && diff > 50) {
              return;
            }
            e.preventDefault();
            e.stopPropagation();
            isLockedRef.current = true;
            if (Math.abs(currentScroll - sectionTop) > 1) {
              window.scrollTo({ top: sectionTop, behavior: "auto" });
            }
            updateProgress(deltaY);
            return;
          }
        }
      }
      isLockedRef.current = false;
    };

    // ============================================
    // 4. EVENTS (Inchangé)
    // ============================================
    const onWheel = (e) => handleScroll(e, e.deltaY);

    const onTouchStart = (e) => {
      isPointerDown = true;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (!isPointerDown) return;
      if (isLockedRef.current) {
        if (e.cancelable) e.preventDefault();
      }
      const delta = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      handleScroll(e, delta * 3);
    };

    const onTouchEnd = () => {
      isPointerDown = false;
    };

    // Init
    applyTransforms(0, 0);

    const options = { passive: false };
    window.addEventListener("wheel", onWheel, options);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, options);
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      // Nettoyage
      window.removeEventListener("resize", calculateMaxScale);
      window.removeEventListener("wheel", onWheel, options);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
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
            <img src={projects[0].image} alt="Projet" />
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
