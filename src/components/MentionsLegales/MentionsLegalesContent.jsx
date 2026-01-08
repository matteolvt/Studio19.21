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
    <section className="mentions">
      {/* Header */}
      <motion.div
        className="mentions-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Mentions légales</h1>
        <p>
          Conformément aux articles 6-III et 19 de la Loi pour la Confiance dans l&apos;Économie Numérique (LCEN) et au RGPD.
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        className="mentions-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mentions-card" variants={itemVariants}>
          <h2>Éditeur du site</h2>
          <p>
            <strong>Studio 19.21</strong><br />
            Co-fondateurs : Julliat Tom (Micro-entreprise) et Mattéo Livrozet (Micro-entreprise)<br />
            Adresse : 9 Route de colombier le cardinal  / 29 rue Paul Montrochet, appartement 312<br />
            Email : contact@studio1921.fr<br />
            Téléphone : +33 6.62.46.26.56  /  +33 7.67.96.06.89<br />
            SIRET : Tom : 99474207000018 // Mattéo : 99433530500011
          </p>
        </motion.div>

        <motion.div className="mentions-card" variants={itemVariants}>
          <h2>Directeur de publication</h2>
          <p>
            Julliat Tom et Mattéo Livrozet, co-fondateurs de Studio 19.21
          </p>
        </motion.div>

        <motion.div className="mentions-card" variants={itemVariants}>
          <h2>Hébergement</h2>
          <p>
            Hébergeur : Vercel <br />
            Adresse : Vercel, Inc. 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
            Site : https://vercel.com
          </p>
        </motion.div>

        <motion.div className="mentions-card" variants={itemVariants}>
          <h2>Propriété intellectuelle</h2>
          <p>
            Tous les éléments présents sur ce site (textes, images, code, design) sont protégés par le droit d&apos;auteur. Toute reproduction est interdite sans autorisation préalable.
          </p>
        </motion.div>

        <motion.div className="mentions-card" variants={itemVariants}>
          <h2>Données personnelles</h2>
          <p>
            Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre aux demandes. Conformément au RGPD, vous pouvez demander l&apos;accès ou la suppression de vos données via <strong>contact@studio1921.fr</strong>.
          </p>
        </motion.div>

        <motion.div className="mentions-card" variants={itemVariants}>
          <h2>Cookies</h2>
          <p>
            Ce site ne dépose aucun cookie ou traceur publicitaire.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MentionsLegalesContent;
