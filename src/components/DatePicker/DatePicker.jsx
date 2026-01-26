import React from "react";
import PropTypes from "prop-types";
import DatePickerReact from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fr } from "date-fns/locale";
import "./DatePicker.css";

export default function DatePicker({ value, onChange }) {
  // Min date : J+7
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 7);

  // Bloquer les WE
  const isWeekday = (date) => date.getDay() !== 0 && date.getDay() !== 6;

  // Convertir string YYYY-MM-DD → Date
  const selectedDate = value ? new Date(value) : null;

  const handleChange = (date) => {
    if (date) {
      const formatted = date.toISOString().split("T")[0]; // YYYY-MM-DD
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
        filterDate={isWeekday}
        locale={fr}
        dateFormat="dd/MM/yy" // Affichage JJ/MM/AA
        placeholderText="JJ/MM/AA"
        className="input-field"
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
