import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./AppointmentFormSection.css";
import React from "react";

export default function AppointmentFormSection(props) {
    return (
    <section className="appointment-form-section">
        <AppointmentForm {...props} slots={props.availableSlots} onSubmit={props.handleSubmit} />
    </section>
  );
}
