import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import NosProjets from "../../components/nosProjets/nosProjets.jsx";
import ProjectsHero from "../../components/ProjectsHero/ProjectsHero.jsx";
import "./projets.css";

function Projets() {
  return (
    <div className="projets">
      <Helmet>
        <title>Nos Projets - Studio-19-21</title>
        <meta name="description" content="Découvrez nos projets récents et réalisations." />
        <meta property="og:title" content="Nos Projets - Studio-19-21" />
        <meta property="og:description" content="Découvrez nos projets récents et réalisations." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <ProjectsHero />
      <NosProjets />
      <Footer />
    </div>
  );
}

export default Projets;
