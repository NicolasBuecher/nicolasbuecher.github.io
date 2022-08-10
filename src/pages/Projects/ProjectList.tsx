import ProjectApvizImg from "../../assets/projectApviz.png";
import ProjectGuerlainLipstickImg from "../../assets/projectHapticmediaGuerlainLipstick.png";
import ProjectGuerlainPerfume from "../../assets/projectHapticmediaGuerlainPerfume.png";

type Project = {
  key: number;
  name: string;
  image: string;
}

const ProjectList: Project[] = [
  {
    key : 0,
    name : "SaaS 3D Configurator Apviz",
    image : ProjectApvizImg
  },
  {
    key : 1,
    name : "Perfume 3D Configurator for Guerlain",
    image : ProjectGuerlainPerfume
  },
  {
    key : 2,
    name : "Lipstick 3D Configurator for Guerlain",
    image : ProjectGuerlainLipstickImg
  }
];

export default ProjectList;
