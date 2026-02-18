import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/navbar/navbar.jsx";
import HeroSection from "../../components/heroSection/heroSection.jsx";
import Section2 from "../../components/section2/section2.jsx";
import Portfolio from "../../components/portfolio/portfolio";
import Section4 from "../../components/section4/section4.jsx";
import NosServices from "../../components/nosServices/nosServices.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./homepage.css";

function HomePage() {
  return (
    <div className="homepage">
      <Helmet>
        <title>Studio1921 | Création de site web pour artisans à Lyon</title>
        <meta name="description" content="Studio-19-21, agence web à Lyon spécialisée dans la création de sites internet pour les artisans des métiers de bouche. Boulangers, traiteurs, pâtissiers : développez votre visibilité en ligne." />
        <meta name="keywords" content="création site web artisan Lyon, site internet boulanger Lyon, site vitrine traiteur Lyon, agence web Lyon artisan, site web métiers de bouche" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.studio1921.fr/" />

        <meta property="og:title" content="Studio-19-21 | Création de site web pour artisans à Lyon" />
        <meta property="og:description" content="Agence web lyonnaise spécialisée dans les sites vitrine pour boulangers, traiteurs et pâtissiers. Sur mesure, professionnel, efficace." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.studio1921.fr/" />
        <meta property="og:image" content="https://www.studio1921.fr/og-image.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Studio-19-21" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Studio1921 | Création de site web pour artisans à Lyon" />
        <meta name="twitter:description" content="Agence web lyonnaise spécialisée dans les sites vitrine pour boulangers, traiteurs et pâtissiers." />
        <meta name="twitter:image" content="https://www.studio1921.fr/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Studio1921",
            "url": "https://www.studio1921.fr",
            "logo": "https://www.studio1921.fr/logo.png",
            "description": "Agence web à Lyon spécialisée dans la création de sites internet pour les artisans des métiers de bouche.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lyon",
              "addressCountry": "FR"
            },
            "areaServed": "Lyon",
            "serviceType": "Création de site web pour artisans"
          })}
        </script>
      </Helmet>
      <Navbar />
      <HeroSection />
      <Section2 />
      <Portfolio />
      <Section4 />
      <NosServices />
      <Footer />
    </div>
  );
}

export default HomePage;
