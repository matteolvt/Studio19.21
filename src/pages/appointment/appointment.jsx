import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import HeroAppointment from "../../components/HeroAppointment/HeroAppointment.jsx";
import AppointmentFormSection from "../../components/AppointmentFormSection/AppointmentFormSection.jsx";
import AppointmentProvider from "../../components/AppointmentProvider/AppointmentProvider.jsx";
import "./appointment.css";

export default function Appointment() {
  return (
    <div className="appointment-page">
      <Helmet>
        <title>Prendre Rendez-vous - Studio-19-21</title>
        <meta name="description" content="Prenez rendez-vous facilement avec notre formulaire en ligne." />
        <meta property="og:title" content="Prendre Rendez-vous - Studio-19-21" />
        <meta property="og:description" content="Prenez rendez-vous facilement avec notre formulaire en ligne." />
        <meta property="og:type" content="website" />
      </Helmet>
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
