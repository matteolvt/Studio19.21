import React from "react";
import { Helmet } from "react-helmet-async";
import { useProjectData } from "../../hooks/useProjectProject";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import ProjectDetailHero from "../../components/ProjectDetailHero/ProjectDetailHero";
import ProjectDetailOverview from "../../components/ProjectDetailOverview/ProjectDetailOverview";
import ProjectProcess from "../../components/ProjectDetailProcess/ProjectDetailProcess";
import ProjectFeatures from "../../components/ProjectDetailFeatures/ProjectDetailFeatures";
import ProjectResults from "../../components/ProjectDetailResults/ProjectDetailResults";
import ProjectFooter from "../../components/ProjectDetailFooter/ProjectFooter";
import ProjectPagesSlider from "../../components/ProjectDetailSlider/ProjectDetailSlider";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { project, nextProject } = useProjectData();

  if (!project) return null;

  return (
    <div className="project-details-page">
      <Helmet>
        <title>{projet.nom} | Réalisation – Studio-19-21 Lyon</title>
        <meta name="description" content={`Découvrez notre réalisation pour ${project.nom}. Site web créé par Studio-19-21, agence web lyonnaise spécialisée pour les artisans.`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.studio1921.fr/projets/${project.slug}`} />
        <meta property="og:title" content={`${projet.nom} | Studio-19-21`} />
        <meta property="og:description" content={`Réalisation web pour ${projet.nom} par Studio-19-21 à Lyon.`} />
        <meta property="og:url" content={`https://www.studio1921.fr/projets/${project.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={project.image} />
        <meta property="og:locale" content="fr_FR" />
      </Helmet>
      <Navbar />
      <ProjectDetailHero project={project} />
      <ProjectDetailOverview project={project} />
      <ProjectProcess project={project} />
      <ProjectPagesSlider project={project} />
      <ProjectFeatures project={project} />
      <ProjectResults project={project} />
      <ProjectFooter project={project} nextProject={nextProject} />
      <Footer />
    </div>
  );
}

export default ProjectDetails;
