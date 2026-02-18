import React from "react";
import { Helmet } from "react-helmet-async";
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
        <title>Prendre rendez-vous | Devis gratuit – Studio-19-21 Lyon</title>
        <meta name="description" content="Prenez rendez-vous avec Studio-19-21 pour discuter de votre projet de site web. Devis gratuit et sans engagement pour les artisans lyonnais." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.studio1921.fr/contact" />
        <meta property="og:title" content="Prendre rendez-vous | Studio-19-21 Lyon" />
        <meta property="og:description" content="Devis gratuit et sans engagement. Parlons de votre projet web ensemble." />
        <meta property="og:url" content="https://www.studio1921.fr/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.studio1921.fr/og-image.png" />
        <meta property="og:locale" content="fr_FR" />
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
