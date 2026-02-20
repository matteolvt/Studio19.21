import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) return;

    // 🔥 Empêche ScrollTrigger de relire le layout trop tôt
    ScrollTrigger.addEventListener("refreshInit", () => {
      // on place ici si besoin des resets (facultatif)
    });

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // ❌ smoothWheel désactivé = moins de forced reflows
      smooth: true,
      smoothWheel: false,
    });

    // ⚡ On déplace l’update GSAP dans un RAF 
    lenis.on("scroll", () => {
      requestAnimationFrame(() => {
        ScrollTrigger.update();
      });
    });

    // 🎯 Boucle GSAP sur Lenis
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ScrollTrigger.removeEventListener("refreshInit");
    };
  }, []);

  return <>{children}</>;
}

SmoothScroll.propTypes = {
  children: PropTypes.node.isRequired,
};