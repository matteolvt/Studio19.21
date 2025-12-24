import "./TimeSlots.css";
import React from "react";
import PropTypes from "prop-types";

TimeSlots.propTypes = {
  slots: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function TimeSlots({ slots = [], value, onChange }) {
  return (
    <label className="appointment-label">
      Créneau :
        <select
            value={value || ""}
            onChange={e => onChange(e.target.value)}
            required
            className="appointment-input"
        >
        <option value="">Sélectionner un créneau</option>
            {slots.length > 0 ? (
            slots.map(slot => <option key={slot} value={slot}>{slot}</option>)

        ) : (

        <option value="" disabled>Aucun créneau disponible</option>
        )}
        </select>
    </label>
  );
}