import React from "react";
import { Helmet } from "react-helmet";
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
        <title>Accueil - Studio-19-21</title>
        <meta name="description" content="Bienvenue sur notre site. Découvrez nos services, projets et réalisations." />
        <meta property="og:title" content="Accueil - Studio-19-21" />
        <meta property="og:description" content="Bienvenue sur notre site. Découvrez nos services, projets et réalisations." />
        <meta property="og:type" content="website" />
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
