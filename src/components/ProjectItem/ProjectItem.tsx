import { useNavigate } from "react-router-dom";
import "./ProjectItem.css";

type ProjectItemProps = {
  id: number;
  name: string;
  image: string;
}

function ProjectItem({ id, name, image }: ProjectItemProps): JSX.Element {
  const navigate = useNavigate();

  const toProject = (event: React.MouseEvent | React.KeyboardEvent): void => {
    if (event.type === "click" || ("key" in event && event.key === "Enter")) {
      navigate(`/projects/${id}`);
    }
  };

  return (
    <div
      className="projectItem"
      role="button"
      tabIndex={0}
      onClick={toProject}
      onKeyPress={toProject}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" data-testid="projectItemBgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
