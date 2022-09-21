import ProjectApvizImg from "../assets/images/projectApviz512.png";
import ProjectApvizJewelryPreviewImg from "../assets/images/projectApvizJewelryPreview.png";
import ProjectApvizWatchPreviewImg from "../assets/images/projectApvizWatchPreview.png";
import ProjectHapticmediaBaccaratImg from "../assets/images/projectHapticmediaBaccarat512.png";
import ProjectHapticmediaBaccaratPreviewImg from "../assets/images/projectHapticmediaBaccaratPreview.png";
import ProjectHapticmediaBaumeImg from "../assets/images/projectHapticmediaBaume512.png";
import ProjectHapticmediaBaumePreviewImg from "../assets/images/projectHapticmediaBaumePreview.png";
import ProjectHapticmediaCourbetImg from "../assets/images/projectHapticmediaCourbet512.png";
import ProjectHapticmediaCourbetPreviewImg from "../assets/images/projectHapticmediaCourbetPreview.png";
import ProjectHapticmediaCuisinellaImg from "../assets/images/projectHapticmediaCuisinella512.png";
import ProjectHapticmediaCuisinellaPreviewImg from "../assets/images/projectHapticmediaCuisinellaPreview.png";
import ProjectHapticmediaEdenlyImg from "../assets/images/projectHapticmediaEdenly512.png";
import ProjectHapticmediaEdenlyPreviewImg from "../assets/images/projectHapticmediaEdenlyPreview.png";
import ProjectHapticmediaGuerlainLipstickImg from "../assets/images/projectHapticmediaGuerlainLipstick512.png";
import ProjectHapticmediaGuerlainLipstickPreviewImg from "../assets/images/projectHapticmediaGuerlainLipstickPreview.png";
import ProjectHapticmediaGuerlainPerfumeImg from "../assets/images/projectHapticmediaGuerlainPerfume512.png";
import ProjectHapticmediaGuerlainPerfumePreviewImg from "../assets/images/projectHapticmediaGuerlainPerfumePreview.png";
import ProjectHapticmediaKenzoImg from "../assets/images/projectHapticmediaKenzo512.png";
import ProjectHapticmediaKenzoPreviewImg from "../assets/images/projectHapticmediaKenzoPreview.png";
import ProjectHapticmediaPiagetImg from "../assets/images/projectHapticmediaPiaget512.png";
import ProjectHapticmediaPiagetPreviewImg from "../assets/images/projectHapticmediaPiagetPreview.png";
import ProjectHapticmediaSchmidtDressingImg from "../assets/images/projectHapticmediaSchmidtDressing512.png";
import ProjectHapticmediaSchmidtDressingPreviewImg from "../assets/images/projectHapticmediaSchmidtDressingPreview.png";
import ProjectHapticmediaSchmidtKitchenImg from "../assets/images/projectHapticmediaSchmidtKitchen512.png";
import ProjectHapticmediaSchmidtKitchenPreviewImg from "../assets/images/projectHapticmediaSchmidtKitchenPreview.png";
import ProjectHapticmediaVanCleefArpelsImg from "../assets/images/projectHapticmediaVanCleefArpels512.png";
import ProjectHapticmediaVanCleefArpelsPreviewImg from "../assets/images/projectHapticmediaVanCleefArpelsPreview.png";
import ProjectPersonalWebsiteImg from "../assets/images/projectPersonalWebsite512.png";
import ProjectPersonalWebsiteAboutImg from "../assets/images/projectPersonalWebsiteAbout.png";
import ProjectPersonalWebsiteHomeImg from "../assets/images/projectPersonalWebsiteHome.png";
import ProjectPersonalWebsiteProjectImg from "../assets/images/projectPersonalWebsiteProject.png";
import ProjectPersonalWebsiteResponsiveImg from "../assets/images/projectPersonalWebsiteResponsive.png";
import ProjectApvizJewelryVid from "../assets/videos/projectApvizJewelry.mp4";
import ProjectApvizWatchVid from "../assets/videos/projectApvizWatch.mp4";
import ProjectHapticmediaBaccaratVid from "../assets/videos/projectHapticmediaBaccarat.mp4";
import ProjectHapticmediaBaumeVid from "../assets/videos/projectHapticmediaBaume.mp4";
import ProjectHapticmediaCourbetVid from "../assets/videos/projectHapticmediaCourbet.mp4";
import ProjectHapticmediaCuisinellaVid from "../assets/videos/projectHapticmediaCuisinella.mp4";
import ProjectHapticmediaEdenlyVid from "../assets/videos/projectHapticmediaEdenly.mp4";
import ProjectHapticmediaGuerlainLipstickVid from "../assets/videos/projectHapticmediaGuerlainLipstick.mp4";
import ProjectHapticmediaGuerlainPerfumeVid from "../assets/videos/projectHapticmediaGuerlainPerfume.mp4";
import ProjectHapticmediaKenzoVid from "../assets/videos/projectHapticmediaKenzo.mp4";
import ProjectHapticmediaPiagetVid from "../assets/videos/projectHapticmediaPiaget.mp4";
import ProjectHapticmediaSchmidtDressingVid from "../assets/videos/projectHapticmediaSchmidtDressing.mp4";
import ProjectHapticmediaSchmidtKitchenVid from "../assets/videos/projectHapticmediaSchmidtKitchen.mp4";
import ProjectHapticmediaVanCleefArpelsVid from "../assets/videos/projectHapticmediaVanCleefArpels.mp4";
import type { Project } from "../types/Project";


const ProjectList: Project[] = [
  {
    id : 0,
    img : ProjectHapticmediaSchmidtKitchenImg,
    alt : "Kitchen 3D configurator project at Hapticmedia cie",
    title : "Schmidt",
    subtitle : "Kitchen 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator alongside with a webapp.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "2017",
    link : "https://www.home-design.schmidt/en-gb/3d-kitchen-configurator",
    details : "https://hapticmedia.com/3d-configurator-kitchen/",
    owned : false,
    media : [{
      img : ProjectHapticmediaSchmidtKitchenPreviewImg,
      alt : "Kitchen 3D configurator presentation clip",
      clip : ProjectHapticmediaSchmidtKitchenVid
    }]
  },
  {
    id : 1,
    img : ProjectHapticmediaSchmidtDressingImg,
    alt : "Dressing 3D configurator project at Hapticmedia cie",
    title : "Schmidt",
    subtitle : "Dressing 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator alongside with a webapp.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "2017",
    link : "https://www.home-design.schmidt/fr-fr/configurateur-3d-dressing",
    details : "https://hapticmedia.com/3d-configurator-dressing/",
    owned : false,
    media : [{
      img : ProjectHapticmediaSchmidtDressingPreviewImg,
      alt : "Dressing 3D configurator presentation clip",
      clip : ProjectHapticmediaSchmidtDressingVid
    }]
  },
  {
    id : 2,
    img : ProjectHapticmediaCuisinellaImg,
    alt : "Kitchen 3D configurator project at Hapticmedia cie",
    title : "Cuisinella",
    subtitle : "Kitchen 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator alongside with a webapp.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "2017",
    link : "https://www.ma.cuisinella/fr-fr/configurateur-cuisine-3d-envies",
    details : "https://hapticmedia.com/3d-configurator-kitchen-cuisinella/",
    owned : false,
    media : [{
      img : ProjectHapticmediaCuisinellaPreviewImg,
      alt : "Kitchen 3D configurator presentation clip",
      clip : ProjectHapticmediaCuisinellaVid
    }]
  },
  {
    id : 3,
    img : ProjectHapticmediaKenzoImg,
    alt : "Shoe 3D configurator project at Hapticmedia cie",
    title : "Kenzo",
    subtitle : "Shoe 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "October 2017",
    details : "https://hapticmedia.com/3d-configurator-shoes/",
    owned : false,
    media : [{
      img : ProjectHapticmediaKenzoPreviewImg,
      alt : "Shoe 3D configurator presentation clip",
      clip : ProjectHapticmediaKenzoVid
    }]
  },
  {
    id : 4,
    img : ProjectHapticmediaEdenlyImg,
    alt : "Jewelry 3D configurator project at Hapticmedia cie",
    title : "Edenly",
    subtitle : "Jewelry 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "December 2017",
    link : "https://en.edenly.com/create-engagement.php",
    details : "https://hapticmedia.com/3d-jewelry-configurator-edenly/",
    owned : false,
    media : [{
      img : ProjectHapticmediaEdenlyPreviewImg,
      alt : "Jewelry 3D configurator presentation clip",
      clip : ProjectHapticmediaEdenlyVid
    }]
  },
  {
    id : 5,
    img : ProjectHapticmediaGuerlainLipstickImg,
    alt : "Lipstick 3D configurator project at Hapticmedia cie",
    title : "Guerlain",
    subtitle : "Lipstick 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "May 2018",
    link : "https://www.guerlain.com/fr/fr-fr/p/rouge-g-luxurious-velvet-metal-rouge-a-levres-metal-velours-tenue-16h-S000010.html",
    details : "https://hapticmedia.com/3d-configurator-lipstick/",
    owned : false,
    media : [{
      img : ProjectHapticmediaGuerlainLipstickPreviewImg,
      alt : "Lipstick 3D configurator preentation clip",
      clip : ProjectHapticmediaGuerlainLipstickVid
    }]
  },
  {
    id : 6,
    img : ProjectHapticmediaBaumeImg,
    alt : "Watch 3D configurator project at Hapticmedia cie",
    title : "Baume",
    subtitle : "Watch 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator alongside with a webapp.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "May 2018",
    details : "https://hapticmedia.com/3d-configurator-watch-baume/",
    owned : false,
    media : [{
      img : ProjectHapticmediaBaumePreviewImg,
      alt : "Watch 3D configurator presentation clip",
      clip : ProjectHapticmediaBaumeVid
    }]
  },
  {
    id : 7,
    img : ProjectHapticmediaGuerlainPerfumeImg,
    alt : "Perfume 3D configurator project at Hapticmedia cie",
    title : "Guerlain",
    subtitle : "Perfume 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "December 2019",
    link : "https://www.guerlain.com/us/en-us/c/personalisation-workshop-us.html",
    details : "https://hapticmedia.com/3d-configurator-perfume-bottle/",
    owned : false,
    media : [{
      img : ProjectHapticmediaGuerlainPerfumePreviewImg,
      alt : "Perfume 3D configurator presentation clip",
      clip : ProjectHapticmediaGuerlainPerfumeVid
    }]
  },
  {
    id : 8,
    img : ProjectHapticmediaBaccaratImg,
    alt : "Chandelier 3D configurator project at Hapticmedia cie",
    title : "Baccarat",
    subtitle : "Chandelier 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator alongside with a webapp.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "February 2020",
    link : "",
    details : "https://hapticmedia.com/my-baccarat-studio/",
    owned : false,
    media : [{
      img : ProjectHapticmediaBaccaratPreviewImg,
      alt : "Chandelier 3D configurator presentation clip",
      clip : ProjectHapticmediaBaccaratVid
    }]
  },
  {
    id : 9,
    img : ProjectHapticmediaPiagetImg,
    alt : "Watch 3D configurator project at Hapticmedia cie",
    title : "Piaget",
    subtitle : "Watch 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator alongside with a webapp.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "2020",
    link : "",
    details : "https://hapticmedia.com/3d-configurator-watch/",
    owned : false,
    media : [{
      img : ProjectHapticmediaPiagetPreviewImg,
      alt : "Watch 3D Configurator presentation clip",
      clip : ProjectHapticmediaPiagetVid
    }]
  },
  {
    id : 10,
    img : ProjectHapticmediaCourbetImg,
    alt : "Ring 3D configurator project at Hapticmedia cie",
    title : "Courbet",
    subtitle : "Ring 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "December 2020",
    link : "https://www.en.courbet.com/configurator/configure/R26Y1011%2003%20FV",
    details : "https://hapticmedia.com/3d-configurator-jewelry/",
    owned : false,
    media : [{
      img : ProjectHapticmediaCourbetPreviewImg,
      alt : "Ring 3D configurator presentation clip",
      clip : ProjectHapticmediaCourbetVid
    }]
  },
  {
    id : 11,
    img : ProjectHapticmediaVanCleefArpelsImg,
    alt : "Ring 3D configurator project at Hapticmedia cie",
    title : "Van Cleef & Arpels",
    subtitle : "Ring 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Based on our own 3D engine, we delivered a real-time customized 3D configurator alongside with a webapp.",
      "My job on this project was to develop the 3D engine with Typescript and BabylonJS."
    ],
    date : "2021",
    link : "https://www.vancleefarpels.com/fr/en/collection/your-poetic-setting/configurator.html",
    details : "https://hapticmedia.com/3d-configurator-van-cleef-and-arpels/",
    owned : false,
    media : [{
      img : ProjectHapticmediaVanCleefArpelsPreviewImg,
      alt : "Ring 3D condigurator presentation clip",
      clip : ProjectHapticmediaVanCleefArpelsVid
    }]
  },
  {
    id : 12,
    img : ProjectApvizImg,
    alt : "SaaS 3D configurator Apviz project at Hapticmedia cie",
    title : "Apviz",
    subtitle : "SaaS 3D configurator",
    description : [
      "This project was carried out within the company Hapticmedia.",
      "Conception, developement and production of a real-time rendering, customizable 3D configurator SaaS. Backend side, the client could log in and then manage and/or customize his unlimited number of 3D configurators, one for each of his products.",
      "My job on this project was plural as a Web Software Engineer, I developed features in Typescript, algorithms in Go, did Cloud monitoring with Amazon CloudWatch and Amazon X-Ray, Cloud computing with Amazon Lambda and Amazon S3, testing with Jest and managed DevOps tools.",
      "The project has been led by a team of 10 and took 3 years before the first version in production were released."
    ],
    date : "April 2021",
    link : "https://apviz.io/request-free-access/",
    details : "https://apviz.io/",
    owned : false,
    media : [{
      img : ProjectApvizJewelryPreviewImg,
      alt : "Jewelry SaaS 3D configurator presentation clip",
      clip : ProjectApvizJewelryVid
    }, {
      img : ProjectApvizWatchPreviewImg,
      alt : "Watch SaaS 3D configurator presentation clip",
      clip : ProjectApvizWatchVid
    }]
  },
  {
    id : 13,
    img : ProjectPersonalWebsiteImg,
    alt : "This website",
    title : "This Website",
    subtitle : "React App",
    description : [
      "In order to tame the frontend side of creating a full responsive web application, I developed my personal website using Typescript, React and Material UI.",
      "I'm not a designer, there are still some flaws but I'm quite proud of the result.",
      "The source code is linted with ESLint, unit tested with Jest and goes through a CI/CD pipeline with GitHub Actions."
    ],
    date : "September 2022",
    link : "https://nicolasbuecher.github.io",
    github : "https://github.com/NicolasBuecher/nicolasbuecher.github.io",
    owned : true,
    media : [{
      img : ProjectPersonalWebsiteResponsiveImg,
      alt : "Responsive website"
    }, {
      img : ProjectPersonalWebsiteHomeImg,
      alt : "Home page"
    }, {
      img : ProjectPersonalWebsiteAboutImg,
      alt : "About page"
    }, {
      img : ProjectPersonalWebsiteProjectImg,
      alt : "Project page"
    }]
    // media : [{
    //   img : ProjectHapticmediaBaccaratPreviewImg,
    //   alt : "",
    //   clip : ProjectHapticmediaBaccaratVid
    // },
    // {
    //   img : ProjectHapticmediaBaccaratImg,
    //   alt : ""
    // },
    // {
    //   img : ProjectHapticmediaBaumeImg,
    //   alt : ""
    // },
    // {
    //   img : ProjectHapticmediaCourbetImg,
    //   alt : ""
    // },
    // {
    //   img : ProjectHapticmediaCuisinellaImg,
    //   alt : ""
    // }, {
    //   img : ProjectHapticmediaGuerlainLipstickImg,
    //   alt : ""
    // }]
  }
];

export default ProjectList;
