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
import "./ProjectDetails.css";

function ProjectDetails() {
  const { project, nextProject } = useProjectData();

  if (!project) return null;

  return (
    <div className="project-details-page">
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
