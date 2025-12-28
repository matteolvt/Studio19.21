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

    // --- COMMUNICATION NAVBAR ---
    const setNavbarHidden = (isHidden) => {
      const event = new CustomEvent("portfolioActive", {
        detail: { active: isHidden },
      });
      window.dispatchEvent(event);
    };

    // --- CALCUL ZOOM ---
    const calculateMaxScale = () => {
      const rect = imgEl.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const scaleX = window.innerWidth / rect.width;
      const scaleY = window.innerHeight / rect.height;
      maxScaleRef.current = Math.max(scaleX, scaleY) * 1.02;
    };

    // --- RENDU ---
    const applyTransforms = (prog, slideProg) => {
      requestAnimationFrame(() => {
        const currentScale = 1 + prog * (maxScaleRef.current - 1);
        const borderRadius = Math.max(0, 24 - prog * 24);
        const textOpacity = Math.max(0, 1 - prog / 0.2);
        const textTranslate = (-prog / 0.2) * 20;

        imgEl.style.transform = `scale(${currentScale})`;
        imgEl.style.borderRadius = `${borderRadius}px`;
        txtEl.style.opacity = textOpacity;
        txtEl.style.transform = `translateY(${textTranslate}%)`;

        if (prog >= 0.99) {
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

    // --- PROGRESSION ---
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

      // Si on revient au début, on débloque
      if (newTotal <= 0.001) {
        progressRef.current = 0;
        slideProgressRef.current = 0;
        isLockedRef.current = false;
        setNavbarHidden(false);
      }
      // Si on arrive à la fin, on débloque
      if (newTotal >= MAX_PROGRESS - 0.001) {
        isLockedRef.current = false;
        setNavbarHidden(false);
      }

      applyTransforms(progressRef.current, slideProgressRef.current);
      return progressRef.current + slideProgressRef.current;
    };

    // --- LOGIQUE MAJEURE : SCROLL HANDLER ---
    const handleScroll = (e, deltaY) => {
      const rect = el.getBoundingClientRect();
      const currentScroll = window.scrollY;
      const absoluteSectionTop = currentScroll + rect.top;

      const totalProgress = progressRef.current + slideProgressRef.current;
      const direction = deltaY > 0 ? "DOWN" : "UP";

      // ZONE DE TOLÉRANCE (SYMÉTRIQUE)
      // On ne capture que si le haut de la section est entre -20px et +20px du haut de l'écran.
      const isInCaptureZone = rect.top < 20 && rect.top > -20;

      // 1. GARDE-FOU (Ignore si on est loin)
      if (!isLockedRef.current) {
        // Si on est trop haut (Hero) OU trop bas (Footer/Contenu suivant)
        // On laisse le scroll natif fonctionner.
        // La condition "isInCaptureZone" s'occupe de filtrer tout le reste.
        if (!isInCaptureZone) return;
      }

      // 2. SORTIE DE SECOURS (SCROLL UP)
      // Si on remonte et que l'anim est finie (0), on relâche immédiatement.
      if (direction === "UP" && totalProgress <= 0.01) {
        isLockedRef.current = false;
        setNavbarHidden(false);
        return;
      }

      // SCENARIO : SCROLL DOWN
      if (direction === "DOWN") {
        if (
          (isInCaptureZone || isLockedRef.current) &&
          totalProgress < MAX_PROGRESS
        ) {
          if (!isLockedRef.current) setNavbarHidden(true);

          e.preventDefault();
          e.stopPropagation();
          isLockedRef.current = true;

          // Alignement unique (Anti-saut)
          if (Math.abs(rect.top) > 2) {
            window.scrollTo({ top: absoluteSectionTop, behavior: "auto" });
          }

          updateProgress(deltaY);
          return;
        }
      }

      // SCENARIO : SCROLL UP (CORRECTION FINALE)
      if (direction === "UP") {
        // On ne capture que si :
        // 1. On est déjà verrouillé (milieu d'anim).
        // 2. OU on entre pile dans la zone de tolérance (isInCaptureZone) ET il y a de l'anim à rembobiner.

        // Plus de "rect.top <= 5", c'était ça le bug qui capturait depuis le bas.
        // Maintenant, on exige "isInCaptureZone" (-20 à +20px).

        if ((isLockedRef.current || isInCaptureZone) && totalProgress > 0.01) {
          if (!isLockedRef.current) setNavbarHidden(true);

          e.preventDefault();
          e.stopPropagation();
          isLockedRef.current = true;

          // Alignement unique
          if (Math.abs(rect.top) > 2) {
            window.scrollTo({ top: absoluteSectionTop, behavior: "auto" });
          }

          updateProgress(deltaY);
          return;
        }
      }
    };

    // --- LISTENERS ---
    const onWheel = (e) => handleScroll(e, e.deltaY);

    const onTouchStart = (e) => {
      isPointerDown = true;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (!isPointerDown) return;
      if (!isLockedRef.current) return; // Important sur mobile
      if (e.cancelable) e.preventDefault();

      const delta = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      handleScroll(e, delta * 3);
    };

    const onTouchEnd = () => {
      isPointerDown = false;
    };

    calculateMaxScale();
    window.addEventListener("resize", calculateMaxScale);
    // Init visuel
    applyTransforms(0, 0);

    const options = { passive: false };
    window.addEventListener("wheel", onWheel, options);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, options);
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      setNavbarHidden(false);
      window.removeEventListener("wheel", onWheel, options);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", calculateMaxScale);
    };
  }, []);

  return (
    <div className="portfolio-wrapper-isolation">
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
    </div>
  );
}
