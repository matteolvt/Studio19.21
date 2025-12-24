import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import HeroAppointment from "../../components/HeroAppointment/HeroAppointment.jsx";
import AppointmentFormSection from "../../components/AppointmentFormSection/AppointmentFormSection.jsx";
import AppointmentProvider from "../../components/AppointmentProvider/AppointmentProvider.jsx";

export default function Appointment() {
  return (
    <div className="appointment-page">
      <Navbar />
      <AppointmentProvider>
        {props => (
          <>
            <HeroAppointment />
            <AppointmentFormSection {...props} />
          </>
        )}
      </AppointmentProvider>
      <Footer />
    </div>
  );
}
