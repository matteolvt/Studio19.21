import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  const isHome = location.pathname === "/";
  const isPortfolio = location.pathname === "/portfolio";

  // Navbar visible par défaut sauf sur portfolio
  const [isVisible, setIsVisible] = useState(!isPortfolio);

  // Mettre à jour la visibilité si la page change
  useEffect(() => {
    if (isPortfolio) {
      setIsVisible(false);
      setIsOpen(false); // Fermer menu si on arrive sur portfolio
      // Réinitialiser scroll lock au cas où
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    } else {
      setIsVisible(true);
    }
  }, [location.pathname, isPortfolio]);

  // Bloque le scroll du body quand le menu burger est ouvert (sauf portfolio)
  useEffect(() => {
    if (isOpen && !isPortfolio) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = -parseInt(document.body.style.top || "0");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
  }, [isOpen, isPortfolio]);

  // Hide/show navbar au scroll (sauf portfolio)
  useEffect(() => {
    const onScroll = () => {
      if (isOpen || isPortfolio) return;

      const currentScroll = window.scrollY;
      if (currentScroll < 50) {
        setIsVisible(true);
      } else if (currentScroll > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen, isPortfolio]);

  const navbarClass = `navbar ${isHome ? "home" : ""} ${
    isOpen ? "navbar-visible" : isVisible ? "navbar-visible" : "navbar-hidden"
  }`;

  const burgerClass = `burger ${isOpen ? "open" : ""} ${isHome ? "white-burger" : ""}`;

  return (
    <nav className={navbarClass}>
      {/* Logo desktop */}
      <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Logo" />
      </Link>

      {/* Menu links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* Mobile logo */}
        <Link to="/" className="mobile-menu-logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Logo" />
        </Link>

        <Link to="/projets" onClick={() => setIsOpen(false)}>Projets</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="#">À propos</Link>

        {/* Mobile bouton devis */}
        <button className="devis-btn mobile-only" onClick={() => setIsOpen(false)}>
          Demander un devis
        </button>
      </div>

      {/* Burger menu */}
      {!isPortfolio && (
        <button
          className={burgerClass}
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      )}

      {/* Desktop bouton devis */}
      {!isPortfolio && (
        <button className="devis-btn desktop-only">
          Demander un devis
        </button>
      )}
    </nav>
  );
};

export default Navbar;
