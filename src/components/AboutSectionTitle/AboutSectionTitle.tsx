import { Typography } from "@mui/material";


interface AboutSectionTitleProps {
  children: string;
}

/**
 * Returns a React component displaying a responsive about text title.
 *
 * @param {string} props.children About text content
 * @returns {JSX.Element}
 */
function AboutSectionTitle({ children }: AboutSectionTitleProps): JSX.Element {

  return (
    <Typography variant="h5" mb="3vw" fontWeight="600">
      {children}
    </Typography>
  );

}

export default AboutSectionTitle;
