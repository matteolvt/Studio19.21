import React from "react";
import PropTypes from "prop-types";
// import "./TimeSlots.css"; // On désactive l'ancien CSS

export default function TimeSlots({ slots, value, onChange }) {
  return (
    <div className="input-group">
      <label className="input-label">CRÉNEAU</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="input-select" /* La classe qui fait la ligne fine */
      >
        <option value="" disabled>
          Sélectionner un créneau
        </option>
        {slots.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>
    </div>
  );
}

TimeSlots.propTypes = {
  slots: PropTypes.array.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
