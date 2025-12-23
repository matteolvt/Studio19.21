import React from "react";
import "./homepage.css";
import Navbar from "../../components/navbar/navbar.jsx";
import HeroSection from "../../components/heroSection/heroSection.jsx";
import Section2 from "../../components/section2/section2.jsx";
import Portfolio from "../../components/portfolio/portfolio";
import Footer from "../../components/footer/footer.jsx";
import Section4 from "../../components/section4/section4.jsx";
import NosServices from "../../components/nosServices/nosServices.jsx";

function HomePage() {
  return (
    <div className="homepage">
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
