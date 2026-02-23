import React from "react";
import AboutHero from "../../components/AboutHero/AboutHero";
import StorySection from "../../components/StorySection/StorySection";
import ValuesSection from "../../components/ValuesSection/ValuesSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import SEO from "../../components/SEO/SEO";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <SEO
        title="À propos | Studio1921 – Agence web pour artisans"
        description="Découvrez l'équipe de Studio1921, spécialisée dans la création de sites internet pour artisans : notre vision, nos valeurs et notre expertise."
      />
      <Navbar />
      <AboutHero />
      <StorySection />
      <StatsSection />
      <ValuesSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;