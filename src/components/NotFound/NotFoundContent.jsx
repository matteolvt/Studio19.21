import { Link } from "react-router-dom";
import React from "react";
import "./notfound.css";

export default function NotFoundContent() {
  return (
    <section className="notfound">
      <div className="notfound-content">
        <span className="notfound-code">404</span>

        <h1>Page introuvable</h1>

        <p>
          Oups… La page que vous cherchez n’existe pas ou a été déplacée.
        </p>

        <Link to="/" className="notfound-btn">
          Retour à l’accueil
        </Link>
      </div>
    </section>
  );
}
