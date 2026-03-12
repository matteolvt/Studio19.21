import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./navbar.css";
import logo from "../../assets/Logo.svg";
import { projectsData } from "../../data/projectsData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const { isDark, toggle } = useTheme();

  const isHome = location.pathname === "/";
  const isPortfolio = location.pathname === "/portfolio";
  const [isPortfolioActive, setIsPortfolioActive] = useState(false);
  const [isVisible, setIsVisible] = useState(!isPortfolio);

  // ─── Thème light/dark uniquement sur la hero d'un projet ───
  useEffect(() => {
  // On ne touche au theme que si on est sur une page projet
  if (location.pathname.includes("/projets/")) {
    const handleScroll = () => {
      const hero = document.querySelector(".project-hero");
      const slug = location.pathname.split("/projets/")[1];
      const project = projectsData.find((p) => p.slug === slug);

      if (hero && project?.navbarTheme) {
        if (hero.getBoundingClientRect().bottom > 100) {
          document.body.setAttribute("data-navbar-theme", project.navbarTheme);
        } else {
          document.body.removeAttribute("data-navbar-theme");
        }
      } else {
        document.body.removeAttribute("data-navbar-theme");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  } else {
    // On est sur une autre page → supprimer tout thème
    document.body.removeAttribute("data-navbar-theme");
  }
}, [location.pathname]);

  // ─── Portfolio active custom event ───
  useEffect(() => {
    const h = (e) => setIsPortfolioActive(e.detail.active);
    window.addEventListener("portfolioActive", h);
    return () => window.removeEventListener("portfolioActive", h);
  }, []);

  // ─── Portfolio page → navbar cachée ───
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

  // ─── Menu mobile scroll lock ───
  useEffect(() => {
    if (isOpen && !isPortfolio) {
      const y = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${y}px`;
      document.body.style.width = "100%";
    } else {
      const y = -parseInt(document.body.style.top || "0");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
    }
  }, [isOpen, isPortfolio]);

  // ─── Scroll show/hide navbar ───
  useEffect(() => {
    const onScroll = () => {
      if (isOpen || isPortfolio || isPortfolioActive) return;
      const cur = window.scrollY;
      if (cur < 50) setIsVisible(true);
      else if (cur > lastScrollY.current) setIsVisible(false);
      else setIsVisible(true);
      lastScrollY.current = cur;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen, isPortfolio, isPortfolioActive]);

  const navbarClass = `navbar ${isHome ? "home" : ""} ${
    isOpen ? "navbar-visible" : isVisible ? "navbar-visible" : "navbar-hidden"
  } ${isPortfolioActive ? "navbar-portfolio-hidden" : ""}`;

  return (
    <nav className={navbarClass}>
      <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Logo" className={isDark ? "logo-dark" : ""} />
      </Link>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-menu-logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Logo" className={isDark ? "logo-dark" : ""} />
        </Link>
        <Link to="/projets" onClick={() => setIsOpen(false)}>Projets</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>À propos</Link>
        <Link to="/contact" className="devis-btn mobile-only" onClick={() => setIsOpen(false)}>
          Demander un devis
        </Link>
      </div>

      <div className="navbar-right">
        <button
          className="theme-toggle"
          onClick={toggle}
          aria-label={isDark ? "Mode clair" : "Mode sombre"}
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb" />
            <span className="theme-toggle-icon theme-toggle-sun">☀️</span>
            <span className="theme-toggle-icon theme-toggle-moon">🌙</span>
          </span>
        </button>

        {!isPortfolio && (
          <button
            className={`burger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen((p) => !p)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        )}

        {!isPortfolio && (
          <Link to="/contact" className="devis-btn desktop-only">
            Demander un devis
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;