import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import NosProjets from "../../components/nosProjets/nosProjets.jsx";
import ProjectsHero from "../../components/ProjectsHero/ProjectsHero.jsx";
import "./projets.css";

function Projets() {
  return (
    <div className="projets">
      <Helmet>
        <title>Nos Projets | Réalisations web pour artisans – Studio1921 Lyon</title>
        <meta name="description" content="Découvrez nos réalisations web pour des artisans lyonnais : boulangers, traiteurs, pâtissiers. Des sites vitrines modernes et efficaces créés par Studio-19-21." />
        <meta name="keywords" content="portfolio agence web Lyon, réalisations site artisan, exemples site boulanger, projets web traiteur Lyon" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.studio1921.fr/projets" />

        <meta property="og:title" content="Nos Projets | Studio1921 Lyon" />
        <meta property="og:description" content="Découvrez nos réalisations web pour des artisans lyonnais : boulangers, traiteurs, pâtissiers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.studio1921.fr/projets" />
        <meta property="og:image" content="https://www.studio1921.fr/og-image.png" />
        <meta property="og:locale" content="fr_FR" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Projets Studio1921",
            "description": "Réalisations web pour artisans des métiers de bouche à Lyon",
            "url": "https://www.studio1921.fr/projets"
          })}
        </script>
      </Helmet>
      <Navbar />
      <ProjectsHero />
      <NosProjets />
      <Footer />
    </div>
  );
}

export default Projets;
