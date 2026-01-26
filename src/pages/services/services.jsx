import React from "react";
import { Helmet } from "react-helmet";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import PricingSection from "../../components/PricingSection/PricingSection";
import ProcessSection from "../../components/ProcessSection/ProcessSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./services.css";

const Services = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Nos Services - Studio-19-21</title>
        <meta name="description" content="Découvrez nos services, tarifs et processus." />
        <meta property="og:title" content="Nos Services - Studio-19-21" />
        <meta property="og:description" content="Découvrez nos services, tarifs et processus." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <ServicesHero />
      <PricingSection />
      <ProcessSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Services;
