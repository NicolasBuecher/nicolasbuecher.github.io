import GitHub from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";


/**
 * Returns a React component displaying a GitHub icon button and handling the external link.
 *
 * @returns {JSX.Element}
 */
function GitHubIconButton(): JSX.Element {

  return (
    <IconButton
      color="inherit"
      aria-label="GitHubIconButton"
      component="a"
      href="https://github.com/NicolasBuecher/nicolasbuecher.github.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHub />
    </IconButton>
  );

}

export default GitHubIconButton;
