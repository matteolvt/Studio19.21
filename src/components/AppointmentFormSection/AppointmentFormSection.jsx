import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./AppointmentFormSection.css";

export default function AppointmentFormSection(props) {
    return (
    <section className="appointment-form-section">
        <AppointmentForm {...props} slots={props.availableSlots} onSubmit={props.handleSubmit} />
    </section>
  );
}
