import React from "react";
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
