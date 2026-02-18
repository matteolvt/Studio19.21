import React from "react";
import { Helmet } from "react-helmet-async";
import MentionsLegalesContent from "../../components/MentionsLegales/MentionsLegalesContent";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const MentionsLegalesPage = () => {
  return (
    <>
      <Helmet>
        <title>Mentions légales | Studio-19-21</title>
        <meta name="description" content="Mentions légales du site Studio-19-21, agence web à Lyon." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.studio1921.fr/mentions-legales" />
      </Helmet>
      <Navbar />
      <MentionsLegalesContent />
      <Footer />
    </>
  );
};

export default MentionsLegalesPage;
