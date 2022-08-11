import ProjectApvizImg from "../../assets/projectApviz.png";
import ProjectGuerlainLipstickImg from "../../assets/projectHapticmediaGuerlainLipstick.png";
import ProjectGuerlainPerfume from "../../assets/projectHapticmediaGuerlainPerfume.png";

type Project = {
  id: number;
  name: string;
  image: string;
  skill: string;
}

const ProjectList: Project[] = [
  {
    id : 0,
    name : "SaaS 3D Configurator Apviz",
    image : ProjectApvizImg,
    skill : "Typescript, Javascript, BabylonJS, NodeJS, React, HTML5, CSS3"
  },
  {
    id : 1,
    name : "Perfume 3D Configurator for Guerlain",
    image : ProjectGuerlainPerfume,
    skill : "Typescript, Javascript, BabylonJS, NodeJS, React, HTML5, CSS3"
  },
  {
    id : 2,
    name : "Lipstick 3D Configurator for Guerlain",
    image : ProjectGuerlainLipstickImg,
    skill : "Typescript, Javascript, BabylonJS, NodeJS, React, HTML5, CSS3"
  }
];

export default ProjectList;
