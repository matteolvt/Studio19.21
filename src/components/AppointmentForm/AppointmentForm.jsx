import React from "react";
import PropTypes from "prop-types";
import DatePicker from "../DatePicker/DatePicker";
import TimeSlots from "../TimeSlots/TimeSlots";
import "./AppointmentForm.css";

export default function AppointmentForm({
  firstName,
  setFirstName,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  projectType,
  setProjectType,
  description,
  setDescription,
  date,
  setDate,
  time,
  setTime,
  slots,
  onSubmit,
}) {
  const isFormValid =
  firstName &&
  name &&
  email &&
  phone &&
  projectType &&
  description &&
  date &&
  time;

  return (
    <form onSubmit={onSubmit} className="appointment-form">
      {/* === 01. PROJET === */}
      <div className="form-section-title">01 — Votre Projet</div>

      <div className="input-group">
        <label className="input-label">Nature du projet</label>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          required
          className="input-select"
        >
          <option value="" disabled>
            Sélectionnez une option
          </option>
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
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Décrivez brièvement vos objectifs..."
          className="input-textarea"
        />
      </div>

      {/* === 02. COORDONNÉES === */}
      <div className="form-section-title">02 — Vos Coordonnées</div>

      <div className="form-row-2-cols">
        <div className="input-group">
          <label className="input-label">Prénom</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Jean"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Dupont"
            className="input-field"
          />
        </div>
      </div>

      <div className="form-row-2-cols">
        <div className="input-group">
          <label className="input-label">Email professionnel</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="jean@entreprise.com"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Téléphone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="06 12 34 56 78"
            className="input-field"
          />
        </div>
      </div>

      {/* === 03. L'ÉCHANGE === */}
      <div className="form-section-title">03 — L&#39;Échange</div>
      <p className="context-text">30 min offertes pour faire connaissance.</p>

      <div className="form-row-2-cols">
        <DatePicker value={date} onChange={setDate} />
        <TimeSlots slots={slots} value={time} onChange={setTime} />
      </div>

      {/* === ACTIONS === */}
      <button
        type="submit"
        className="appointment-button"
        disabled={!isFormValid}
      >
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
  firstName: PropTypes.string,
  setFirstName: PropTypes.func,
  lastName: PropTypes.string,
  setLastName: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  phone: PropTypes.string,
  setPhone: PropTypes.func,
  projectType: PropTypes.string,
  setProjectType: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func,
  date: PropTypes.string,
  setDate: PropTypes.func,
  time: PropTypes.string,
  setTime: PropTypes.func,
  slots: PropTypes.array,
  onSubmit: PropTypes.func,
};
