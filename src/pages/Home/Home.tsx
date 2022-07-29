import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReactElement } from "react";
import "./Home.css";

function Home(): ReactElement {
  return (
    <div className="home" data-testid="home">
      <div className="about">
        <h2>Hi, My name is Nicolas</h2>
        <div className="prompt">
          <p>
            A software developer with passion for learning and creating.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, NPM, MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, AWS S3</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Typescript, Javascript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
