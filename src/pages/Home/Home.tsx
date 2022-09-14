import Box from "@mui/material/Box";
import Banner from "../../components/Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";


/**
 * Returns a React component displaying the "/home" page.
 *
 * @returns {JSX.Element}
 */
function Home(): JSX.Element {

  return (
    <Box data-testid="home">
      <Banner />
      <AboutMe />
      <Projects />
    </Box>
  );

}

export default Home;
