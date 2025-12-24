import "./DatePicker.css";
import React from "react";
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
