import React from "react";
import { Helmet } from "react-helmet-async";
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
        <title>Nos Services | Sites web pour Artisan – Studio1921 Lyon</title>
        <meta name="description" content="Découvrez nos services de création de sites web sur mesure pour les artisans des métiers de bouche à Lyon : site vitrine, référencement local, design personnalisé." />
        <meta name="keywords" content="service création site boulanger Lyon, site vitrine traiteur, référencement local artisan Lyon, agence web métiers de bouche Lyon" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.studio1921.fr/services" />

        <meta property="og:title" content="Nos Services | Studio1921 Lyon" />
        <meta property="og:description" content="Sites web sur mesure pour boulangers, traiteurs et pâtissiers à Lyon. Design soigné, référencement local inclus." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.studio1921.fr/services" />
        <meta property="og:image" content="https://www.studio1921.fr/og-image.png" />
        <meta property="og:locale" content="fr_FR" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Création de site web",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Studio1921",
              "url": "https://www.studio1921.fr/services"
            },
            "areaServed": "Lyon",
            "description": "Création de sites web professionnels pour les artisans des métiers de bouche à Lyon.",
            "audience": {
              "@type": "Audience",
              "audienceType": "Artisans des métiers de bouche"
            }
          })}
        </script>
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
