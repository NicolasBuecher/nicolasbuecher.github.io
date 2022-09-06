import { Typography } from "@mui/material";
import { ReactNode } from "react";


interface AboutSectionContentProps {
  justify?: boolean;
  children: ReactNode;
}

/**
 * Returns a React component displaying a responsive about text content.
 *
 * @param {boolean} props.justify True if text must be justified
 * @param {children} props.children About text content
 * @returns {JSX.Element}
 */
function AboutSectionContent({ justify = false, children }: AboutSectionContentProps): JSX.Element {

  return (
    <Typography my="2vw" align={justify ? "justify" : undefined}>
      {children}
    </Typography>
  );

}

export default AboutSectionContent;
