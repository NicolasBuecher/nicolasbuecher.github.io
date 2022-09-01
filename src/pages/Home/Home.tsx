// import EmailIcon from "@mui/icons-material/Email";
// import GithubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";
import "./Home.css";
import HomeBanner from "../../assets/homeBanner.png";

// Responsive background image style
const backgroundStyle = {
  height : "50vw",
  backgroundImage : `url(${HomeBanner})`,
  backgroundSize : "cover",
  backgroundPosition : "right",
  display : "flex"
};

// Welcome banner style
const bannerStyle = {
  height : "40%",
  width : "60%",
  backgroundColor : "hsla(0,0%,100%,.8)",
  outline : "1px solid #fafafa",
  outlineOffset : "8px",
  textAlign : "center",
  m : "auto",
  display : "flex",
  flexDirection : "column",
  justifyContent : "center"
};

// Responsive greetings text style
const typoHelloStyle = {
  m : "1vw",
  color : "text.primary",
  fontSize : "5vw"
};

// Responsive job text style
const typoJobStyle = {
  m : "1vw",
  color : "text.primary",
  fontSize : "3vw"
};

// Responsive disclaimer style
const typoTmpStyle = {
  color : "text.secondary",
  fontSize : "1vw"
};

function Home(): JSX.Element {

  return (
    <Box className="home" data-testid="home" sx={backgroundStyle}>
      <Box sx={bannerStyle}>
        <Typography variant="h3" sx={typoHelloStyle}>
          Hey, I&apos;m Nicolas.
        </Typography>
        <Typography variant="h5" sx={typoJobStyle}>
          Web Software Engineer
        </Typography>
        <Typography variant="overline" sx={typoTmpStyle}>
          Please don&apos;t mind the mess, this website is under construction.
        </Typography>
      </Box>
    </Box>
  );


  // return (
  //   <div className="home" data-testid="home">
  //     <div className="about">
  //       <h2>Hi, My name is Nicolas</h2>
  //       <div className="prompt">
  //         <p>
  //           A software developer with passion for learning and creating.
  //         </p>
  //         <LinkedInIcon />
  //         <EmailIcon />
  //         <GithubIcon />
  //       </div>
  //     </div>
  //     <div className="skills">
  //       <h1>Skills</h1>
  //       <ol className="list">
  //         <li className="item">
  //           <h2>Front-End</h2>
  //           <span>ReactJS, NPM, MaterialUI</span>
  //         </li>
  //         <li className="item">
  //           <h2>Back-End</h2>
  //           <span>NodeJS, AWS S3</span>
  //         </li>
  //         <li className="item">
  //           <h2>Languages</h2>
  //           <span>Typescript, Javascript, Go</span>
  //         </li>
  //       </ol>
  //     </div>
  //   </div>
  // );
}

export default Home;
