import React from "react";
import { motion } from "framer-motion";
import "./mentionsLegalesContent.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MentionsLegalesContent = () => {
  return (
    <section className="mentions-page">
      {/* Header */}
      <motion.div
        className="mentions-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="juridique-tag">JURIDIQUE</span>
        <h1>Mentions légales</h1>
        <p>
          La transparence est la base de toute relation de confiance.{" "}
          <br className="desktop-break" />
          Conformément aux articles 6-III et 19 de la Loi pour la Confiance dans
          l&apos;Économie Numérique.
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        className="mentions-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 01. Éditeur */}
        <motion.div className="legal-card" variants={itemVariants}>
          <h2>01. Éditeur du site</h2>
          <div className="legal-card-details">
            <p className="legal-highlight">Studio 19.21</p>
            <p>
              <strong>Co-fondateurs :</strong> Tom Julliat (Micro-entreprise) et
              Mattéo Livrozet (Micro-entreprise)
            </p>
            <p>
              <strong>Adresse :</strong> 9 Route de colombier le cardinal / 29
              rue Paul Montrochet, appt 312, 69002 Lyon
            </p>
            <p>
              <strong>Contact :</strong>{" "}
              <a href="mailto:contact@studio1921.fr">contact@studio1921.fr</a>
            </p>
            <p>
              <strong>SIRET :</strong> Tom : 99474207000018 // Mattéo :
              99433530500011
            </p>
          </div>
        </motion.div>

        {/* 02. Publication */}
        <motion.div className="legal-card" variants={itemVariants}>
          <h2>02. Direction de la publication</h2>
          <div className="legal-card-details">
            <p>
              <strong>Directeurs :</strong> Tom Julliat et Mattéo Livrozet
            </p>
            <p className="legal-note">
              En leur qualité de co-fondateurs de Studio 19.21.
            </p>
          </div>
        </motion.div>

        {/* 03. Hébergement */}
        <motion.div className="legal-card" variants={itemVariants}>
          <h2>03. Hébergement</h2>
          <div className="legal-card-details">
            <p className="legal-highlight">Vercel Inc.</p>
            <p>
              340 S Lemon Ave #4133, Walnut, CA 91789, USA
              <br />
              <a href="https://vercel.com" target="_blank" rel="noreferrer">
                https://vercel.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* 04. Propriété Intellectuelle */}
        <motion.div className="legal-card" variants={itemVariants}>
          <h2>04. Propriété intellectuelle</h2>
          <div className="legal-card-details">
            <p>
              L’ensemble de ce site relève de la législation française et
              internationale sur le droit d’auteur et la propriété
              intellectuelle.
            </p>
            <p>
              Toute reproduction, modification ou adaptation de tout ou partie
              des éléments du site est interdite sans autorisation écrite
              préalable.
            </p>
          </div>
        </motion.div>

        {/* 05. Données & Cookies */}
        <motion.div className="legal-card" variants={itemVariants}>
          <h2>05. Données et Cookies</h2>
          <div className="legal-card-details">
            <p>
              Les données collectées via le formulaire de contact sont utilisées
              uniquement pour répondre aux demandes. Conformément au RGPD, vous
              pouvez exercer vos droits via{" "}
              <a href="mailto:contact@studio1921.fr">contact@studio1921.fr</a>.
            </p>
            <p style={{ marginTop: "10px" }}>
              🍪 <strong>Cookies :</strong> Ce site ne dépose aucun cookie
              publicitaire tiers.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MentionsLegalesContent;
