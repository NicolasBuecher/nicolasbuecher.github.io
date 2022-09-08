import { GitHub } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import parseIntStrict from "../../helpers/parseIntStrict";
import ProjectList from "../Projects/ProjectList";


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
      <h1>{project.title}</h1>
      <img src={project.img} alt={project.title} />
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
