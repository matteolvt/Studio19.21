import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  // 1. Détection de la taille d'écran
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fonction pour vérifier la largeur
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Vérification au chargement
    checkIsMobile();

    // Vérification si on redimensionne la fenêtre
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // 2. Scroll en haut à chaque changement de page (pour tout le monde)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 3. LOGIQUE D'AFFICHAGE

  // SI C'EST UN PC (> 900px) :
  // On renvoie juste le contenu sans animation (Fragment simple).
  // Le changement sera instantané.
  if (!isMobile) {
    return <>{children}</>;
  }

  // SI C'EST UN MOBILE (<= 900px) :
  // On applique l'animation "Snappy" (rapide).
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Arrive d'en bas
      animate={{ opacity: 1, y: 0 }} // Se place
      exit={{ opacity: 0, y: -50 }} // Part vers le haut
      transition={{ duration: 0.3, ease: "easeOut" }} // Rapide (0.3s)
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
