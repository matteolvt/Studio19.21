import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import MentionsLegalesContent from "../../components/MentionsLegales/MentionsLegalesContent";
import SEO from "../../components/SEO/SEO";

const MentionsLegalesPage = () => {
  return (
    <>
      <SEO
        title="Mentions légales | Studio1921"
        description="Mentions légales de l'agence web Studio1921 spécialisée dans la création de sites pour artisans."
      />
      <Navbar />
      <MentionsLegalesContent />
      <Footer />
    </>
  );
};

export default MentionsLegalesPage;