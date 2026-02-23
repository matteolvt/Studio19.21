import React from "react";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import PricingSection from "../../components/PricingSection/PricingSection";
import ProcessSection from "../../components/ProcessSection/ProcessSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import SEO from "../../components/SEO/SEO.jsx";
import "./services.css";

const Services = () => {
  return (
    <div className="services-page">
      <SEO
        title="Services | Studio1921 – Création de sites pour artisans"
        description="Découvrez les services de Studio1921 : conception de sites web sur mesure pour artisans, optimisation SEO et solutions e-commerce adaptées."
      />
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