import ProjectApvizImg from "../../assets/projectApviz512.png";
import ProjectHapticmediaBaccaratImg from "../../assets/projectHapticmediaBaccarat512.png";
import ProjectHapticmediaBaumeImg from "../../assets/projectHapticmediaBaume512.png";
import ProjectHapticmediaCourbetImg from "../../assets/projectHapticmediaCourbet512.png";
import ProjectHapticmediaCuisinellaImg from "../../assets/projectHapticmediaCuisinella512.png";
import ProjectHapticmediaEdenlyImg from "../../assets/projectHapticmediaEdenly512.png";
import ProjectHapticmediaGuerlainLipstickImg from "../../assets/projectHapticmediaGuerlainLipstick512.png";
import ProjectHapticmediaGuerlainPerfumeImg from "../../assets/projectHapticmediaGuerlainPerfume512.png";
import ProjectHapticmediaKenzoImg from "../../assets/projectHapticmediaKenzo512.png";
import ProjectHapticmediaPiagetImg from "../../assets/projectHapticmediaPiaget512.png";
import ProjectHapticmediaSchmidtDressingImg from "../../assets/projectHapticmediaSchmidtDressing512.png";
import ProjectHapticmediaSchmidtKitchenImg from "../../assets/projectHapticmediaSchmidtKitchen512.png";
import ProjectHapticmediaVanCleefImg from "../../assets/projectHapticmediaVanCleefArpels512.png";


type Project = {
  id: number;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  skill: string;
  projectLink: string;
  githubLink?: string;
}

const ProjectList: Project[] = [
  {
    id : 0,
    img : ProjectHapticmediaSchmidtKitchenImg,
    alt : "Kitchen 3D configurator project at Hapticmedia cie",
    title : "Schmidt",
    subtitle : "Kitchen 3D configurator",
    description : "",
    date : "2017",
    skill : "",
    projectLink : ""
  },
  {
    id : 1,
    img : ProjectHapticmediaSchmidtDressingImg,
    alt : "Dressing 3D configurator project at Hapticmedia cie",
    title : "Schmidt",
    subtitle : "Dressing 3D configurator",
    description : "",
    date : "2017",
    skill : "",
    projectLink : ""
  },
  {
    id : 2,
    img : ProjectHapticmediaCuisinellaImg,
    alt : "Kitchen 3D configurator project at Hapticmedia cie",
    title : "Cuisinella",
    subtitle : "Kitchen 3D configurator",
    description : "",
    date : "2017",
    skill : "",
    projectLink : ""
  },
  {
    id : 3,
    img : ProjectHapticmediaKenzoImg,
    alt : "Shoe 3D configurator project at Hapticmedia cie",
    title : "Kenzo",
    subtitle : "Shoe 3D configurator",
    description : "",
    date : "October 2017",
    skill : "",
    projectLink : ""
  },
  {
    id : 4,
    img : ProjectHapticmediaEdenlyImg,
    alt : "Jewelry 3D configurator project at Hapticmedia cie",
    title : "Edenly",
    subtitle : "Ring 3D configurator",
    description : "",
    date : "December 2017",
    skill : "",
    projectLink : ""
  },
  {
    id : 5,
    img : ProjectHapticmediaGuerlainLipstickImg,
    alt : "Lipstick 3D configurator project at Hapticmedia cie",
    title : "Guerlain",
    subtitle : "Lipstick 3D configurator",
    description : "",
    date : "May 2018",
    skill : "",
    projectLink : ""
  },
  {
    id : 6,
    img : ProjectHapticmediaBaumeImg,
    alt : "Watch 3D configurator project at Hapticmedia cie",
    title : "Baume",
    subtitle : "Watch 3D configurator",
    description : "",
    date : "May 2018",
    skill : "",
    projectLink : ""
  },
  {
    id : 7,
    img : ProjectHapticmediaGuerlainPerfumeImg,
    alt : "Perfume 3D configurator project at Hapticmedia cie",
    title : "Guerlain",
    subtitle : "Perfume 3D configurator",
    description : "",
    date : "December 2019",
    skill : "Typescript, Javascript, BabylonJS, NodeJS, React, HTML5, CSS3",
    projectLink : "https://hapticmedia.com/3d-configurator-perfume-bottle/"
  },
  {
    id : 8,
    img : ProjectHapticmediaBaccaratImg,
    alt : "Chandelier 3D configurator project at Hapticmedia cie",
    title : "Baccarat",
    subtitle : "Chandelier 3D configurator",
    description : "",
    date : "February 2020",
    skill : "",
    projectLink : ""
  },
  {
    id : 9,
    img : ProjectHapticmediaPiagetImg,
    alt : "Watch 3D configurator project at Hapticmedia cie",
    title : "Piaget",
    subtitle : "Watch 3D configurator",
    description : "",
    date : "2020",
    skill : "",
    projectLink : ""
  },
  {
    id : 10,
    img : ProjectHapticmediaCourbetImg,
    alt : "Ring 3D configurator project at Hapticmedia cie",
    title : "Courbet",
    subtitle : "Ring 3D configurator",
    description : "",
    date : "December 2020",
    skill : "",
    projectLink : ""
  },
  {
    id : 11,
    img : ProjectHapticmediaVanCleefImg,
    alt : "Ring 3D configurator project at Hapticmedia cie",
    title : "Van Cleef Arpels",
    subtitle : "Ring 3D configurator",
    description : "",
    date : "2021",
    skill : "",
    projectLink : ""
  },
  {
    id : 12,
    img : ProjectApvizImg,
    alt : "SaaS 3D configurator Apviz project at Hapticmedia cie",
    title : "Apviz",
    subtitle : "SaaS 3D configurator",
    description : "",
    date : "April 2021",
    skill : "Typescript, Javascript, BabylonJS, NodeJS, React, HTML5, CSS3",
    projectLink : "https://apviz.io/"
  }
].reverse();

export default ProjectList;
