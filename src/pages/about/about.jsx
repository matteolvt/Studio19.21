import React from "react";
import AboutHero from "../../components/AboutHero/AboutHero";
import StorySection from "../../components/StorySection/StorySection";
import ValuesSection from "../../components/ValuesSection/ValuesSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import Navbar from "../../components/navbar/Navbar";
import StatsSection from "../../components/StatsSection/StatsSection";
import Footer from "../../components/footer/Footer";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
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
