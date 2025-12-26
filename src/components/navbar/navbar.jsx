import React from "react";
import "./navbar.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <Link to="/projets">Projets</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="#">À Propos</Link>
          </li>
        </ul>
      </div>

      <div className="devis">
        <button id="devis-button">Demander un devis</button>
      </div>
    </nav>
  );
};

export default Navbar;
