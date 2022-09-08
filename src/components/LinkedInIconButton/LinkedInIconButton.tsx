import LinkedIn from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";


/**
 * Returns a React component displaying a LinkedIn icon button and handling the external link.
 *
 * @returns {JSX.Element}
 */
function LinkedInIconButton(): JSX.Element {

  return (
    <IconButton
      color="inherit"
      aria-label="LinkedInIconButton"
      component="a"
      href="https://www.linkedin.com/in/nicolas-buecher-03636b10a/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedIn />
    </IconButton>
  );

}

export default LinkedInIconButton;
