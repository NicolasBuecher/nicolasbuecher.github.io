import ProjectItem from "../../components/ProjectItem/ProjectItem";
import ProjectList from "./ProjectList";
import "./Projects.css";

function Projects(): JSX.Element {
  return (
    <div className="projects" data-testid="projects">
      <h1>Projects with Hapticmedia</h1>
      <div className="projectList">
        {ProjectList.map(({ id, name, image }) => <ProjectItem key={id} id={id} name={name} image={image} />)}
      </div>
    </div>
  );
}

export default Projects;
