import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-cta">
          <h2>Un projet digital en tête ?</h2>
          <p>Discutons de vos besoins et voyons comment vous aider.</p>
          <Link to="/contact" className="footer-button">
            Prendre rendez-vous
          </Link>
          <span className="footer-note">
            Réponse sous 24h • Sans engagement
          </span>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-contact">
            <span className="footer-label">Contact</span>
            <p>contact@studio1921.fr</p>
            <p>+33 7 67 96 06 89</p>
          </div>

          {/* <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">◎</a>
          </div> */}
        </div>

        <div className="footer-legal">
          <Link to="/mentions-legales" className="footer-legal-button">
            Mentions légales
          </Link>
        </div>

        <div className="footer-signature">
          © 2025 Studio 19.21. {"All rights reserved. "}
        </div>
      </div>
    </footer>
  );
}
