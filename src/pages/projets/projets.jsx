import React from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import NosProjets from "../../components/nosProjets/nosProjets.jsx";
import ProjectsHero from "../../components/ProjectsHero/ProjectsHero.jsx";
import "./projets.css";

function Projets() {
  return (
    <div className="projets">
      <Navbar />
      <ProjectsHero />
      <NosProjets />
      <Footer />
    </div>
  );
}

export default Projets;
