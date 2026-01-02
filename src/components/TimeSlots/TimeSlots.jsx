import React from "react";
import PropTypes from "prop-types";
import "./TimeSlots.css";

export default function TimeSlots({ slots, value, onChange, disabled }) {
  return (
    <div className="input-group">
      <label className="input-label">CRÉNEAU</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="input-select"
      >
        <option value="" disabled>
          {disabled ? "Veuillez d'abord choisir une date" : "Sélectionner un créneau"}
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
  disabled: PropTypes.bool,
};
