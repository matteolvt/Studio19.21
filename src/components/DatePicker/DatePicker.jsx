import React from "react";
import PropTypes from "prop-types";
import DatePickerReact from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import du style de base
import { fr } from "date-fns/locale"; // Pour l'avoir en Français
import "./DatePicker.css"; // Notre CSS pour le customiser

export default function DatePicker({ value, onChange }) {
  // Calcul date min (J+7)
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 7);

  // Fonction pour désactiver les WE (Samedi/Dimanche)
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  // Convertir la string "YYYY-MM-DD" en objet Date pour le composant
  const selectedDate = value ? new Date(value) : null;

  const handleChange = (date) => {
    // On reformate en "YYYY-MM-DD" pour ton state global
    if (date) {
      const formatted = date.toISOString().split("T")[0];
      onChange(formatted);
    } else {
      onChange("");
    }
  };

  return (
    <div className="input-group custom-datepicker-wrapper">
      <label className="input-label">DATE</label>
      <DatePickerReact
        selected={selectedDate}
        onChange={handleChange}
        minDate={minDate}
        filterDate={isWeekday} // Bloque visuellement les WE
        locale={fr} // Calendrier en FR
        dateFormat="dd/MM/yyyy"
        placeholderText="Sélectionner une date"
        className="input-field" // On garde ton style de ligne soulignée
        // Ces options empêchent le clavier de s'ouvrir sur mobile (meilleure UX)
        onFocus={(e) => e.target.blur()}
      />
      <span
        style={{
          fontSize: "0.7rem",
          color: "#999",
          marginTop: "5px",
          fontFamily: "Public Sans, sans-serif",
        }}
      >
        Du Lundi au Vendredi
      </span>
    </div>
  );
}

DatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
