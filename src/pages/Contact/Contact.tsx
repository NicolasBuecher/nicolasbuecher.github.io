import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useRef, useState, FormEvent } from "react";


/**
 * Returns a React component displaying the "./contact" page.
 *
 * @returns {JSX.Element}
 */
function Contact(): JSX.Element {

  // This ref is used for the contact form
  const form = useRef(null);

  // Handle error/success alert state when the user submits a form
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  // Send me an email and toggle error/sucess alert
  const sendEmail = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gug06dh",
        "template_bvkr2pq",
        e.currentTarget,
        "fOAXMOod77jQ3Hmgh"
      ).then(
        () => { setSuccessAlert(true); },
        () => { setErrorAlert(true); }
      );

    e.currentTarget.reset();
  };

  return (
    <Grid container spacing="1vw" my="2vw" display="flex" justifyContent="center">
      <Grid xs={10} sm={9} md={6} lg={5} xl={5}>
        <Card sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">Contact</Typography>
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField label="First Name" placeholder="Enter first name" name="user_first_name" variant="standard" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField label="Last Name" placeholder="Enter last name" name="user_last_name" variant="standard" fullWidth required />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField type="email" label="Email" placeholder="Enter email" name="user_email" variant="standard" fullWidth required />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField label="Message" multiline rows={8} placeholder="Type your message here" name="message" variant="standard" fullWidth required />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} xl={12} mt="20px">
                  <Button type="submit" variant="contained" color="primary" fullWidth>Send</Button>
                </Grid>
                <Box display="flex" flexDirection="column" alignItems="center" width="100%" mt="10px">
                  <Collapse in={successAlert}>
                    <Alert
                      severity="success"
                      onClose={() => { setSuccessAlert(false); }}
                      data-testid="success-alert"
                    >
                      Your message has been sent successfully!
                    </Alert>
                  </Collapse>
                  <Collapse in={errorAlert}>
                    <Alert
                      severity="error"
                      onClose={() => { setErrorAlert(false); }}
                      data-testid="error-alert"
                    >
                      An error occurred.
                    </Alert>
                  </Collapse>
                </Box>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={10} sm={9} md={5} lg={5} xl={5}>
        <Card sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
          <CardContent>
            <Box>
              <Typography gutterBottom variant="h5" pb="20px">
                Current status
              </Typography>
              <Typography align="center">
                Wanderlust satisfied &#10003;
              </Typography>
              <Typography align="center">
                Cultural agenda filled &#10003;
              </Typography>
              <Typography gutterBottom variant="h6" color="#4caf50" align="center" mt="10px" mb="30px">
                Now open to job opportunities.
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="h5" py="20px">
                Location
              </Typography>
              <Typography variant="h6" align="center" pb="20px">
                Strasbourg, France
              </Typography>
              <iframe
                src="https://maps.google.com/maps?q=48.582798,7.745374&amp;hl=fr&amp;z=10&amp;output=embed"
                title="Contact Map"
                style={{ width: "100%", minHeight: "250px", border: "none" }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

}

export default Contact;
