import React from "react";
import { Helmet } from "react-helmet";
import AboutHero from "../../components/AboutHero/AboutHero";
import StorySection from "../../components/StorySection/StorySection";
import ValuesSection from "../../components/ValuesSection/ValuesSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import Navbar from "../../components/navbar/navbar";
import StatsSection from "../../components/StatsSection/StatsSection";
import Footer from "../../components/footer/footer";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>À propos - Notre histoire</title>
        <meta name="description" content="Découvrez notre histoire, nos valeurs et notre équipe." />
        <meta property="og:title" content="À propos - Notre histoire" />
        <meta property="og:description" content="Découvrez notre histoire, nos valeurs et notre équipe." />
        <meta property="og:type" content="website" />
      </Helmet>
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
