import React from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import HeroAppointment from "../../components/HeroAppointment/HeroAppointment.jsx";
import AppointmentFormSection from "../../components/AppointmentFormSection/AppointmentFormSection.jsx";
import AppointmentProvider from "../../components/AppointmentProvider/AppointmentProvider.jsx";
import SEO from "../../components/SEO/SEO.jsx";
import "./appointment.css";

export default function Appointment() {
  return (
    <div className="appointment-page">
      <SEO
        title="Prendre rendez-vous | Studio1921"
        description="Réservez une consultation avec Studio1921 pour créer votre site web sur mesure pour artisans à Lyon."
      />
      <Navbar />
      <AppointmentProvider>
        {(props) => (
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