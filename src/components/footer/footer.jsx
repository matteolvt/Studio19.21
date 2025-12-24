import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Bloc CTA */}
        <div className="footer-cta">
          <h2>Un projet digital en tête ?</h2>
          <p>Discutons de vos besoins et voyons comment vous aider.</p>
          <a href="/rdv" className="footer-button">
            Prendre rendez-vous
          </a>
          <span className="footer-note">
            Réponse sous 24h • Sans engagement
          </span>
        </div>

        {/* Séparateur */}
        <div className="footer-divider" />

        {/* Infos */}
        <div className="footer-bottom">
          <div className="footer-contact">
            <span className="footer-label">Contact</span>
            <p>studio19.21@gmail.com</p>
            <p>+33 7 67 96 06 89</p>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">
              in
            </a>
            <a href="#" aria-label="Instagram">
              ◎
            </a>
          </div>
        </div>

        {/* Signature */}
        <div className="footer-signature">
          © 2025 Studio 19.21. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
