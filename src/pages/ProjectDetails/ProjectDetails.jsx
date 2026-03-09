import React from "react";
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
import SEO from "../../components/SEO/SEO.jsx";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { project, nextProject } = useProjectData();

  if (!project) return null;

  return (
    <div className="project-details-page">
      <SEO
        title={`${project.title} | Studio1921`}
        description={project.tagline}
      />
      <Navbar />
      <ProjectDetailHero project={project} />
      <ProjectDetailOverview project={project} />
      <ProjectProcess project={project} />
      <ProjectPagesSlider project={project} />
      <ProjectFooter project={project} nextProject={nextProject} />
      <ProjectFeatures project={project} />
      <ProjectResults project={project} />
      <Footer />
    </div>
  );
}

export default ProjectDetails;