import React from "react";
import PropTypes from "prop-types";
import DatePicker from "../DatePicker/DatePicker";
import TimeSlots from "../TimeSlots/TimeSlots";
import "./AppointmentForm.css";

export default function AppointmentForm({
  date,
  setDate,
  time,
  setTime,
  name,
  setName,
  email,
  setEmail,
  slots,
  onSubmit
}) {
  return (
    <form onSubmit={onSubmit} className="appointment-form">
      <DatePicker value={date} onChange={setDate} />
      <TimeSlots slots={slots} value={time} onChange={setTime} />

      <label className="appointment-label">
        Nom :
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="appointment-input"
        />
      </label>

      <label className="appointment-label">
        Email :
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="appointment-input"
        />
      </label>

      <button
        type="submit"
        className="appointment-button"
        disabled={!date || !time || !name || !email}
      >
        Réserver
      </button>
    </form>
  );
}

AppointmentForm.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  slots: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
