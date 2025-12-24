import React from "react";
import PropTypes from "prop-types";
import "./DatePicker.css";

export default function DatePicker({ value, onChange }) {
  return (
    <label className="appointment-label">
      Date :
      <input
        type="date"
        value={value}
        onChange={e => onChange(e.target.value)}
        required
        className="appointment-input"
      />
    </label>
  );
}

DatePicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
