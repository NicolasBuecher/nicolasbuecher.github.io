import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AboutMeImg from "../../assets/aboutMeTravel.png";
import AboutSectionContent from "../../components/AboutSectionContent/AboutSectionContent";
import AboutSectionTitle from "../../components/AboutSectionTitle/AboutSectionTitle";
import DownloadButton from "../../components/DownloadButton/DownloadButton";


/**
 * Returns a React component displaying the "/about" page.
 *
 * @returns {JSX.Element}
 */
function AboutMe(): JSX.Element {

  return (
    <Grid container spacing="3vw" m="0 4vw" pt="1vw" data-testid="about-me">
      <Grid xs={0} sm={5} md={6} lg={4} xl={3} display="flex">
        <Box sx={{ width: "100%", my: "auto" }} component="img" alt="One picture of my numerous travels." src={AboutMeImg} />
      </Grid>
      <Grid xs={12} sm={7} md={6} lg={8} xl={5}>
        <Box>
          <AboutSectionTitle>ABOUT ME</AboutSectionTitle>
          <AboutSectionContent justify>
            <b>I&apos;m an IT Engineer</b>
            {" "}
            who started his career in 2016 as R&D Engineer in 3D graphics for a
            DeepTech/RetailTech french startup.
          </AboutSectionContent>
          <AboutSectionContent justify>
            In a very innovative but competitive domain, we soon started the development of a SaaS 3D
            configurator and I took up the position of Web Software Engineer.
          </AboutSectionContent>
          <AboutSectionContent justify>
            I had the luck to work in a very controlled environment (DevOps, best practices, tests, systematic
            reviews...) which makes me confident in realizing quality projects.
          </AboutSectionContent>
          <AboutSectionContent justify>
            <b>But I&apos;m also:</b>
            <br />
            An autodidact pianist, a longboard rider, a craft beer lover, a tireless
            backpacker, a baby theater actor, a volleyball player, a volunteer in many cultural events, a
            concert halls regular, an occasional hiker, a living local cultural agenda, concerned by ecology
            and feminism...
          </AboutSectionContent>
          <AboutSectionContent justify>
            I speak
            {" "}
            <b>French</b>
            {" "}
            ,
            {" "}
            <b>English</b>
            {" and "}
            <b>Spanish</b>
            {" "}
            fluently and I have basics in
            {" "}
            <b>German</b>
            .
          </AboutSectionContent>
        </Box>
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={6} xl={4}>
        <Box>
          <AboutSectionTitle>SKILLS</AboutSectionTitle>
          <AboutSectionContent>
            <b>WEB - </b>
            Typescript
            {" "}
            <b>&#183;</b>
            {" "}
            Javascript
            {" "}
            <b>&#183;</b>
            {" "}
            NodeJS
          </AboutSectionContent>
          <AboutSectionContent>
            <b>FRONTEND - </b>
            React
            {" "}
            <b>&#183;</b>
            {" "}
            Material UI
          </AboutSectionContent>
          <AboutSectionContent>
            <b>CLOUD - </b>
            AWS Lambda
            {" "}
            <b>&#183;</b>
            {" "}
            AWS S3
            {" "}
            <b>&#183;</b>
            {" "}
            AWS CloudWatch
            {" "}
            <b>&#183;</b>
            {" "}
            AWS X-Ray
          </AboutSectionContent>
          <AboutSectionContent>
            <b>TEST - </b>
            Jest
          </AboutSectionContent>
          <AboutSectionContent>
            <b>ALGORITHMS - </b>
            Go
          </AboutSectionContent>
          <AboutSectionContent>
            <b>DEVOPS - </b>
            CI/CD GitHub Actions
            {" "}
            <b>&#183;</b>
            {" "}
            Microservices
            {" "}
            <b>&#183;</b>
            {" "}
            Functional Programming
            {" "}
            <b>&#183;</b>
            {" "}
            Best practices
          </AboutSectionContent>
          <AboutSectionContent>
            <b>3D - </b>
            WebGL
            {" "}
            <b>&#183;</b>
            {" "}
            GLSL
            {" "}
            <b>&#183;</b>
            {" "}
            BabylonJS
          </AboutSectionContent>
        </Box>
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={6} xl={12}>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap="3vw 5vw">
          <DownloadButton
            href="cv-2022-08-no-number-no-address.pdf"
            download="BUECHER_CV_2022"
          >
            DOWNLOAD CV (FR)
          </DownloadButton>
          <DownloadButton>
            DOWNLOAD CV (EN)
          </DownloadButton>
        </Box>
      </Grid>
    </Grid>
  );

}

export default AboutMe;
