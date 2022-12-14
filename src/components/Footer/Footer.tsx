import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


/**
 * Returns a React component displaying a responsive footer.
 *
 * @returns {JSX.Element}
 */
function Footer(): JSX.Element {
  return (
    <Box display="flex" justifyContent="center" my="1vw" data-testid="footer">
      <Typography variant="overline"> &copy; 2022 nicolasbuecher.github.io</Typography>
    </Box>
  );
}

export default Footer;
