import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCountdown from "../../hooks/useCountdown/useCountdown";


interface NotFoundProps {
  timer?: number;
  children?: string;
}

const timerStyle = {
  fontFamily : "Orbitron",
  fontSize : "7rem"
};

const TIMER_START_DEFAULT = 7000;

/**
 * Returns a React component displaying the 404 page.
 * After `timer`ms, it automatically redirects to home page.
 *
 * @param {number} props.timer Time before home redirection in milliseconds
 * @param {string} props.children Alert text content if a known error has redirected to this page
 * @returns {JSX.Element}
 */
function NotFound({ timer = TIMER_START_DEFAULT, children = "" }: NotFoundProps): JSX.Element {

  const [seconds, centiseconds] = useCountdown(timer);
  const timerIsDone = seconds === "00" && centiseconds === "00";
  const navigate = useNavigate();

  useEffect(() => {
    if (timerIsDone) {
      navigate("/");
    }
  }, [timerIsDone, navigate]);


  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      data-testid="not-found"
    >
      <Box display="flex" width="100%">
        <Typography variant="h1" align="right" flex="0 0 45%" sx={timerStyle}>{seconds}</Typography>
        <Typography variant="h1" align="center" flex="0 0 10%" sx={timerStyle}>:</Typography>
        <Typography variant="h1" align="left" flex="0 0 45%" sx={timerStyle}>{centiseconds}</Typography>
      </Box>
      <Typography variant="h1" fontSize="7rem">QUICK!</Typography>
      <Button variant="contained" sx={{ fontSize: "1.5rem", m: "30px" }} component={Link} to="/">Go back Home!</Button>
      <Typography variant="overline" fontSize="1rem">This is a 404 NOT FOUND emergency.</Typography>
      {
        children
          ? <Alert severity="error" sx={{ mt: "20px" }}>{children}</Alert>
          : undefined
      }
    </Box>
  );

}

export default NotFound;
