import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/Logo.svg"; // Vérifie ton chemin

const Preloader = () => {
  return (
    <motion.div
      // État initial (quand il apparaît)
      initial={{ opacity: 1 }}
      // État de sortie (quand il disparaît pour laisser place au site)
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }, // Disparition douce
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#031FD0", // Ton bleu
        zIndex: 99999, // Au-dessus de tout
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.img
        src={logo}
        alt="Logo Loading"
        style={{
          width: "120px",
          filter: "brightness(0) invert(1)", // Logo en blanc
        }}
        // Petite animation de pulsation sur le logo
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default Preloader;
