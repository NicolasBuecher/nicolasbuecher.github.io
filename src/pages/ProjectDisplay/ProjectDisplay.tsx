import { GitHub } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import parseIntStrict from "../../helpers/parseIntStrict";
import ProjectList from "../Projects/ProjectList";
import "./ProjectDisplay.css";

function ProjectDisplay(): JSX.Element {
  const { id } = useParams();

  if (!id) {
    throw new Error("No project id.");
  }

  const parsedId = parseIntStrict(id);
  if (parsedId === undefined) {
    throw new Error("Invalid project id.");
  }

  const project = ProjectList[parsedId];
  if (project === undefined) {
    throw new Error("Project ID does not match any project.");
  }

  return (
    <div className="projectDisplay">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b>
        {" "}
        {project.skill}
      </p>
      <GitHub />
    </div>
  );
}

export default ProjectDisplay;
