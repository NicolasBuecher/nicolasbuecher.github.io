import { Box } from "@mui/material";
import Banner from "../../components/Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";


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
    </Box>
  );

}

export default Home;
