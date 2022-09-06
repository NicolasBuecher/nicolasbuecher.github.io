import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AboutMeImg from "../../assets/aboutMeTravel.png";


// Responsive MUI Grid2 text title style
const sectionTitleStyle = {
  fontWeight : "600",
  mb : "3vw"
};

// Responsive MUI Grid2 text content style
const sectionContentStyle = {
  my : "2vw"
};

/**
 * Returns a React component displaying the "/about" page.
 *
 * @returns JSX.Element
 */
function AboutMe(): JSX.Element {

  return (
    <Grid container spacing="3vw" m="1vw 4vw">
      <Grid xs={0} sm={5} md={6} lg={4} xl={3} display="flex">
        <Box sx={{ width: "100%", my: "auto" }} component="img" alt="One picture of my numerous travels." src={AboutMeImg} />
      </Grid>
      <Grid xs={12} sm={7} md={6} lg={8} xl={5}>
        <Box>
          <Typography sx={sectionTitleStyle} variant="h5">ABOUT ME</Typography>
          <Typography sx={sectionContentStyle} align="justify">
            <b>I&apos;m an IT Engineer</b>
            {" "}
            who started his career in 2016 as R&D Engineer in 3D graphics for a
            DeepTech/RetailTech french startup.
          </Typography>
          <Typography sx={sectionContentStyle} align="justify">
            In a very innovative but competitive domain, we soon started the development of a SaaS 3D
            configurator and I took up the position of Web Software Engineer.
          </Typography>
          <Typography sx={sectionContentStyle} align="justify">
            I had the luck to work in a very controlled environment (DevOps, best practices, tests, systematic
            reviews...) which makes me confident in realizing quality projects.
          </Typography>
          <Typography sx={sectionContentStyle} align="justify">
            <b>But I&apos;m also:</b>
            <br />
            An autodidact pianist, a longboard rider, a craft beer lover, a tireless
            backpacker, a baby theater actor, a volleyball player, a volunteer in many cultural events, a
            concert halls regular, an occasional hiker, a living local cultural agenda, concerned by ecology
            and feminism...
          </Typography>
          <Typography sx={sectionContentStyle}>
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
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={6} xl={4}>
        <Box>
          <Typography sx={sectionTitleStyle} variant="h5">SKILLS</Typography>
          <Typography sx={sectionContentStyle}>
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
          </Typography>
          <Typography sx={sectionContentStyle}>
            <b>FRONTEND - </b>
            React
            {" "}
            <b>&#183;</b>
            {" "}
            Material UI
          </Typography>
          <Typography sx={sectionContentStyle}>
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
          </Typography>
          <Typography sx={sectionContentStyle}>
            <b>TEST - </b>
            Jest
          </Typography>
          <Typography sx={sectionContentStyle}>
            <b>ALGORITHMS - </b>
            Go
          </Typography>
          <Typography sx={sectionContentStyle}>
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
          </Typography>
          <Typography sx={sectionContentStyle}>
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
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={6} xl={12}>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" size="large">
            DOWNLOAD CV
          </Button>
        </Box>
      </Grid>
    </Grid>
  );

}

export default AboutMe;
