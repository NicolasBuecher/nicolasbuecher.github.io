import MenuIcon from "@mui/icons-material/Menu";
import Skateboarding from "@mui/icons-material/Skateboarding";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Link } from "react-router-dom";
import GitHubIconButton from "../GitHubIconButton/GitHubIconButton";
import LinkedInIconButton from "../LinkedInIconButton/LinkedInIconButton";


/**
 * Returns a React component displaying a responsive static navigation bar.
 *
 * @returns {JSX.Element}
 */
function Navbar(): JSX.Element {

  // Used to set the position of the menu
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  // Handle menu opening
  const isMenuOpen = !!anchorElement;
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorElement(event.currentTarget);
  };
  const closeMenu = (): void => {
    setAnchorElement(null);
  };

  // Replace navbar by a menu icon if screen is too small
  const isScreenSmall = useMediaQuery("(max-width:700px)");
  if (isScreenSmall) {
    return (
      <AppBar position="static">
        <Toolbar sx={{ display: "flex" }}>
          <Box sx={{ flex: "0 0 80%", display: "flex" }} data-testid="logo">
            <Button color="inherit" startIcon={<Skateboarding />} component={Link} to="/">
              <Typography variant="h6">Nicolas BUECHER</Typography>
            </Button>
          </Box>
          <Box sx={{ flex: "0 0 20%", display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              color="inherit"
              id="main-menu-button"
              data-testid="main-menu-button"
              aria-controls={isMenuOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? "true" : undefined}
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="main-menu"
              anchorEl={anchorElement}
              open={isMenuOpen}
              onClose={closeMenu}
              MenuListProps={{
                "aria-labelledby" : "main-menu-button"
              }}
            >
              <MenuItem onClick={closeMenu} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={closeMenu} component={Link} to="/about">About Me</MenuItem>
              <MenuItem onClick={closeMenu} component={Link} to="/projects">Projects</MenuItem>
              <MenuItem onClick={closeMenu} component={Link} to="/contact">Contact</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  // Display a navbar when screen is wider
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex" }}>
        <Box sx={{ flex: "0 0 35%", display: "flex" }} data-testid="logo">
          <Button color="inherit" startIcon={<Skateboarding />} component={Link} to="/">
            <Typography variant="h6">Nicolas BUECHER</Typography>
          </Button>
        </Box>
        <Box sx={{ flex: "0 0 55%", display: "flex", justifyContent: "flex-end" }} data-testid="navlinks">
          <Button color="inherit" sx={{ mx: "1%" }} component={Link} to="/">HOME</Button>
          <Button color="inherit" sx={{ mx: "1%" }} component={Link} to="/about">ABOUT ME</Button>
          <Button color="inherit" sx={{ mx: "1%" }} component={Link} to="/projects">PROJECTS</Button>
          <Button color="inherit" sx={{ mx: "1%" }} component={Link} to="/contact">CONTACT</Button>
        </Box>
        <Box sx={{ flex: "0 0 10%", display: "flex", justifyContent: "flex-end" }} data-testid="media-icons">
          <LinkedInIconButton />
          <GitHubIconButton />
        </Box>
      </Toolbar>
    </AppBar>
  );

}

export default Navbar;
