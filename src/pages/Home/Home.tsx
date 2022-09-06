import { Box, Typography } from "@mui/material";
import HomeBannerImg from "../../assets/homeBanner.png";
import AboutMe from "../AboutMe/AboutMe";


// Responsive background image style
const backgroundStyle = {
  height : "50vw",
  backgroundImage : `url(${HomeBannerImg})`,
  backgroundSize : "cover",
  backgroundPosition : "right",
  display : "flex"
};

// Responsive welcome banner style
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

/**
 * Returns a React component displaying the "/home" page.
 *
 * @returns JSX.Element
 */
function Home(): JSX.Element {

  return (
    <Box data-testid="home">
      <Box sx={backgroundStyle}>
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
      <AboutMe />
    </Box>

  );

}

export default Home;
