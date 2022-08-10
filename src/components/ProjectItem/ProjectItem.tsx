import "./ProjectItem.css";

type ProjectItemProps = {
  image?: string;
  name: string;
}

function ProjectItem({ image = "", name }: ProjectItemProps): JSX.Element {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
