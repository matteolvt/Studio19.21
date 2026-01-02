import React, { useState } from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";
import DatePicker from "../DatePicker/DatePicker";
import TimeSlots from "../TimeSlots/TimeSlots";
import "./AppointmentForm.css";

export default function AppointmentForm({
  firstName, setFirstName,
  name, setName,
  email, setEmail,
  phone, setPhone,
  projectType, setProjectType,
  description, setDescription,
  date, setDate,
  time, setTime,
  slots = [],
  honeypot, setHoneypot,
  onSubmit
}) {
  const [captchaValue, setCaptchaValue] = useState(null);

  const isFormValid = firstName && name && email && phone &&
                      projectType && description && date && time &&
                      captchaValue; // captcha obligatoire

  const handleSubmit = (e) => {
    e.preventDefault();

    // Bloque les bots via honeypot
    if (honeypot) {
      console.warn("Bot détecté via honeypot !");
      return;
    }

    if (!captchaValue) {
      alert("Veuillez valider le captcha !");
      return;
    }

    // Appel du onSubmit du provider, on envoie aussi le token captcha
    onSubmit(captchaValue);
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">

      {/* ===== Honeypot invisible ===== */}
      <input
        type="text"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        autoComplete="off"
        tabIndex="-1"
      />

      {/* ===== 01. PROJET ===== */}
      <div className="form-section-title">01 — Votre Projet</div>
      <div className="input-group">
        <label className="input-label">Nature du projet</label>
        <select
          value={projectType}
          onChange={e => setProjectType(e.target.value)}
          required
          className="input-select"
        >
          <option value="" disabled>Sélectionnez une option</option>
          <option value="site-vitrine">Site Vitrine</option>
          <option value="e-commerce">E-Commerce</option>
          <option value="app-web">Application Web / SaaS</option>
          <option value="refonte">Refonte</option>
          <option value="audit">Audit & Conseil</option>
        </select>
      </div>
      <div className="input-group">
        <label className="input-label">En quelques mots</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
          placeholder="Décrivez brièvement vos objectifs..."
          className="input-textarea"
        />
      </div>

      {/* ===== 02. COORDONNÉES ===== */}
      <div className="form-section-title">02 — Vos Coordonnées</div>
      <div className="form-row-2-cols">
        <input
          type="text"
          placeholder="Prénom"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="input-field"
        />
      </div>
      <div className="form-row-2-cols">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="tel"
          placeholder="06 11 11 11 11"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          className="input-field"
        />
      </div>

      {/* ===== 03. CRÉNEAUX ===== */}
      <div className="form-section-title">03 — L&#39;Échange</div>
      <p className="context-text">30 min offertes pour faire connaissance.</p>
      <div className="form-row-2-cols">
        <DatePicker value={date} onChange={setDate} />
        <TimeSlots slots={slots} value={time} onChange={setTime} />
      </div>

      {/* ===== RECAPTCHA ===== */}
      <div className="form-group">
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={setCaptchaValue}
        />
      </div>

      {/* ===== SUBMIT ===== */}
      <button type="submit" className="appointment-button" disabled={!isFormValid}>
        Valider ma demande
      </button>

      <div className="form-footer-text">
        <span>✓ Gratuit</span>
        <span>✓ Sans engagement</span>
        <span>✓ Réponse 24h</span>
      </div>
    </form>
  );
}

AppointmentForm.propTypes = {
  firstName: PropTypes.string, setFirstName: PropTypes.func,
  name: PropTypes.string, setName: PropTypes.func,
  email: PropTypes.string, setEmail: PropTypes.func,
  phone: PropTypes.string, setPhone: PropTypes.func,
  projectType: PropTypes.string, setProjectType: PropTypes.func,
  description: PropTypes.string, setDescription: PropTypes.func,
  date: PropTypes.string, setDate: PropTypes.func,
  time: PropTypes.string, setTime: PropTypes.func,
  slots: PropTypes.array.isRequired,
  honeypot: PropTypes.string.isRequired,
  setHoneypot: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
