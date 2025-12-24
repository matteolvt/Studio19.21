import React from "react";
import PropTypes from "prop-types";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./AppointmentFormSection.css";

export default function AppointmentFormSection(props) {
  return (
    <section className="appointment-form-section">
      <AppointmentForm {...props} slots={props.availableSlots} onSubmit={props.handleSubmit} />
    </section>
  );
}

AppointmentFormSection.propTypes = {
  availableSlots: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
};
