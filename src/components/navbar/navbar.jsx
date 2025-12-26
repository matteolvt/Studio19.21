import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  const isHome = location.pathname === "/";

  return (
    <nav className={`navbar ${isHome ? "home" : ""}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/projets" onClick={() => setIsOpen(false)}>Projets</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="#" onClick={() => setIsOpen(false)}>À propos</Link>
        <button className="devis-btn mobile-only" onClick={() => setIsOpen(false)}>
          Demander un devis
        </button>
      </div>

      <button
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <button className="devis-btn desktop-only">
        Demander un devis
      </button>
    </nav>
  );
};

export default Navbar;
