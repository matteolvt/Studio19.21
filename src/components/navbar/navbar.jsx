import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/Logo.svg";
import { projectsData } from "../../data/projectsData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarTheme, setNavbarTheme] = useState("");

  const isHome = location.pathname === "/";
  const isPortfolio = location.pathname === "/portfolio";
  const [isPortfolioActive, setIsPortfolioActive] = useState(false);
  const [isVisible, setIsVisible] = useState(!isPortfolio);

  // ─── Thème light/dark uniquement sur la hero d'un projet ───
  useEffect(() => {
  if (!location.pathname.includes("/projets/")) {
    document.body.removeAttribute("data-navbar-theme");
    return;
  }

  const slug = location.pathname.split("/projets/")[1];
  const project = projectsData.find((p) => p.slug === slug);

  if (!project?.navbarTheme) {
    document.body.removeAttribute("data-navbar-theme");
    return;
  }

  const handleScroll = () => {
    const hero = document.querySelector(".project-hero");
    if (!hero) {
      document.body.setAttribute("data-navbar-theme", project.navbarTheme);
      return;
    }
    if (hero.getBoundingClientRect().bottom > 100) {
      document.body.setAttribute("data-navbar-theme", project.navbarTheme);
    } else {
      document.body.removeAttribute("data-navbar-theme");
    }
  };

  // Délai pour laisser le DOM se monter
  const timeout = setTimeout(handleScroll, 50);
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    clearTimeout(timeout);
    window.removeEventListener("scroll", handleScroll);
    document.body.removeAttribute("data-navbar-theme");
  };
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

    setIsScrolled(cur > 50);

    if (cur < 50) setIsVisible(true);
    else if (cur > lastScrollY.current) setIsVisible(false);
    else setIsVisible(true);
    lastScrollY.current = cur;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, [isOpen, isPortfolio, isPortfolioActive]);

// Observe data-navbar-theme sur le body
useEffect(() => {
  const observer = new MutationObserver(() => {
    setNavbarTheme(document.body.getAttribute("data-navbar-theme") || "");
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ["data-navbar-theme"] });
  return () => observer.disconnect();
}, []);

  const navbarClass = `navbar ${isHome ? "home" : ""} ${isScrolled && !navbarTheme ? "scrolled" : ""} ${
  isOpen ? "navbar-visible" : isVisible ? "navbar-visible" : "navbar-hidden"
} ${isPortfolioActive ? "navbar-portfolio-hidden" : ""}`;



  return (
    <nav className={navbarClass}>
      <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Logo"/>
      </Link>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-menu-logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Logo"/>
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