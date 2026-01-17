import React from "react";
import { Helmet } from "react-helmet";
import MentionsLegalesContent from "../../components/MentionsLegales/MentionsLegalesContent";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const MentionsLegalesPage = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - Studio-19-21</title>
        <meta name="description" content="Consultez les mentions légales et informations légales de notre site." />
        <meta property="og:title" content="Mentions Légales - Studio-19-21" />
        <meta property="og:description" content="Consultez les mentions légales et informations légales de notre site." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <MentionsLegalesContent />
      <Footer />
    </>
  );
};

export default MentionsLegalesPage;
