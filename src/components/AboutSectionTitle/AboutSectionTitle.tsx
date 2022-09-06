import { Typography } from "@mui/material";


interface AboutSectionTitleProps {
  children: string;
}

/**
 * Returns a React component displaying a responsive about text title.
 *
 * @param {children} props.children About text content
 * @returns {JSX.Element}
 */
function AboutSectionTitle({ children }: AboutSectionTitleProps): JSX.Element {

  return (
    <Typography fontWeight="600" mb="3vw" variant="h5">
      {children}
    </Typography>
  );

}

export default AboutSectionTitle;
