import React from "react";
import { Helmet } from "react-helmet-async";
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
        <title>À propos | Studio-19-21 – Agence web à Lyon</title>
        <meta name="description" content="Découvrez l'équipe de Studio-19-21, agence web lyonnaise spécialisée dans la création de sites internet pour les artisans des métiers de bouche." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.studio1921.fr/about" />
        <meta property="og:title" content="À propos | Studio-19-21 Lyon" />
        <meta property="og:description" content="Qui sommes-nous ? Studio-19-21, agence web à Lyon dédiée aux artisans boulangers, traiteurs et pâtissiers." />
        <meta property="og:url" content="https://www.studio1921.fr/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.studio1921.fr/og-image.png" />
        <meta property="og:locale" content="fr_FR" />
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
