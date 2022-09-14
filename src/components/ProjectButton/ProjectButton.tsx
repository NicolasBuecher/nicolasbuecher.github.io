import Button from "@mui/material/Button";
import { ReactNode } from "react";


interface ProjectButtonProps {
  startIcon: JSX.Element;
  link?: string;
  children: ReactNode;
}

/**
 * Returns a React component displaying a button for the project page.
 * If link is empty or undefined, the button is disabled.
 *
 * @param {JSX.Element} props.startIcon A MUI Icon
 * @param {string} props.link An external link
 * @param {ReactNode} props.children Button text content
 * @returns {JSX.Element}
 */
function ProjectButton({ startIcon, link = "", children }: ProjectButtonProps): JSX.Element {

  return (
    <Button
      startIcon={startIcon}
      sx={{ width: "70%", mx: "auto", my: ".5vw" }}
      variant="contained"
      size="medium"
      disabled={!link}
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Button>
  );

}

export default ProjectButton;
