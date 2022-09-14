import Typography from "@mui/material/Typography";
import { ReactNode } from "react";


interface AboutSectionContentProps {
  justify?: boolean;
  children: ReactNode;
}

/**
 * Returns a React component displaying a responsive about text content.
 *
 * @param {boolean} props.justify True if text must be justified
 * @param {ReactNode} props.children About text content
 * @returns {JSX.Element}
 */
function AboutSectionContent({ justify = false, children }: AboutSectionContentProps): JSX.Element {

  return (
    <Typography align={justify ? "justify" : undefined} my="2vw">
      {children}
    </Typography>
  );

}

export default AboutSectionContent;
