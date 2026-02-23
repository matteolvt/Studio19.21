import React from "react";
import ProjectsHero from "../../components/ProjectsHero/ProjectsHero.jsx";
import NosProjets from "../../components/nosProjets/nosProjets.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import SEO from "../../components/SEO/SEO.jsx";
import "./projets.css";

function Projets() {
  return (
    <div className="projets">
      <SEO
        title="Projets | Studio1921 – Portfolio de sites pour artisans"
        description="Découvrez nos réalisations : des sites web sur mesure pour boulangers, pâtissiers et autres artisans à Lyon et en France."
      />
      <Navbar />
      <ProjectsHero />
      <NosProjets />
      <Footer />
    </div>
  );
}

export default Projets;