import ProjectApvizImg from "../../assets/projectApviz.png";
import ProjectGuerlainLipstickImg from "../../assets/projectHapticmediaGuerlainLipstick.png";
import ProjectGuerlainPerfume from "../../assets/projectHapticmediaGuerlainPerfume.png";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import "./Projects.css";

function Projects(): JSX.Element {
  return (
    <div className="projects" data-testid="projects">
      <h1>Projects with Hapticmedia</h1>
      <div className="projectList">
        <ProjectItem name="SaaS 3D Configurator Apviz" image={ProjectApvizImg} />
        <ProjectItem name="Lipstick 3D Configurator for Guerlain" image={ProjectGuerlainLipstickImg} />
        <ProjectItem name="Perfume 3D Configurator for Guerlain" image={ProjectGuerlainPerfume} />
      </div>
    </div>
  );
}

export default Projects;
