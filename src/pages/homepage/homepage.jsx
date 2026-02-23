import React from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import HeroSection from "../../components/heroSection/heroSection.jsx";
import Section2 from "../../components/section2/section2.jsx";
import Portfolio from "../../components/portfolio/portfolio";
import Section4 from "../../components/section4/section4.jsx";
import NosServices from "../../components/nosServices/nosServices.jsx";
import SEO from "../../components/SEO/SEO.jsx";
import "./homepage.css";

function HomePage() {
  return (
    <div className="homepage">
      <SEO
        title="Studio1921 | Création de sites web pour artisans à Lyon"
        description="Studio1921, agence web spécialisée dans la création de sites internet pour artisans"
      />
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