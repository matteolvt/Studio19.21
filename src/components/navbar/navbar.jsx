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
  const [isPortfolioActive, setIsPortfolioActive] = useState(false);
  const [isVisible, setIsVisible] = useState(!isPortfolio);

  // 👇 1er useEffect : Active le mode light sur la page portfolio 3D
  useEffect(() => {
    if (location.pathname === "/projets/immersive-3d-portfolio") {
      document.body.setAttribute("data-navbar-theme", "light");
    } else {
      document.body.removeAttribute("data-navbar-theme");
    }

    return () => {
      document.body.removeAttribute("data-navbar-theme");
    };
  }, [location.pathname]);

  // 👇 2ème useEffect : Désactive le mode light au scroll (CORRIGÉ)
  useEffect(() => {
    if (location.pathname !== "/projets/immersive-3d-portfolio") return;

    const handleScroll = () => {
      const heroSection = document.querySelector(".project-hero"); // 👈 CORRIGÉ
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();

      if (heroRect.bottom > 100) {
        document.body.setAttribute("data-navbar-theme", "light");
      } else {
        document.body.removeAttribute("data-navbar-theme");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Écouter les événements du portfolio
  useEffect(() => {
    const handlePortfolioActive = (e) => {
      setIsPortfolioActive(e.detail.active);
    };

    window.addEventListener("portfolioActive", handlePortfolioActive);

    return () => {
      window.removeEventListener("portfolioActive", handlePortfolioActive);
    };
  }, []);

  // Mettre à jour la visibilité si la page change
  useEffect(() => {
    if (isPortfolio) {
      setIsVisible(false);
      setIsOpen(false);
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
      if (isOpen || isPortfolio || isPortfolioActive) return;

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
  }, [isOpen, isPortfolio, isPortfolioActive]);

  const navbarClass = `navbar ${isHome ? "home" : ""} ${
    isOpen ? "navbar-visible" : isVisible ? "navbar-visible" : "navbar-hidden"
  } ${isPortfolioActive ? "navbar-portfolio-hidden" : ""}`;

  const burgerClass = `burger ${isOpen ? "open" : ""} ${
    isHome ? "white-burger" : ""
  }`;

  return (
    <nav className={navbarClass}>
      {/* Logo desktop */}
      <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Logo" />
      </Link>

      {/* Menu links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* Mobile logo */}
        <Link
          to="/"
          className="mobile-menu-logo"
          onClick={() => setIsOpen(false)}
        >
          <img src={logo} alt="Logo" />
        </Link>

        <Link to="/projets" onClick={() => setIsOpen(false)}>
          Projets
        </Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          À propos
        </Link>

        {/* Mobile bouton devis */}
        <Link
          to="/contact"
          className="devis-btn mobile-only"
          onClick={() => setIsOpen(false)}
        >
          Demander un devis
        </Link>
      </div>

      {/* Burger menu */}
      {!isPortfolio && (
        <button
          className={burgerClass}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      )}

      {/* Desktop bouton devis */}
      {!isPortfolio && (
        <Link to="/contact" className="devis-btn desktop-only">
          Demander un devis
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
