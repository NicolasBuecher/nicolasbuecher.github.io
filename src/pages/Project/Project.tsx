import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import GitHubIconButton from "../../components/GitHubIconButton/GitHubIconButton";
import ProjectList from "../../data/ProjectList";
import parseIntStrict from "../../helpers/parseIntStrict";


/**
 * Returns a React component displaying the "./projects/:id" page.
 *
 * @returns {JSX.Element}
 */
function Project(): JSX.Element {

  const { id } = useParams();

  // TODO: Instead of throwing, please redirect to error page
  if (!id) {
    throw new Error("No project id.");
  }

  const parsedId = parseIntStrict(id);
  if (parsedId === undefined) {
    throw new Error("Invalid project id.");
  }

  const project = ProjectList[parsedId];
  if (project === undefined) {
    throw new Error("Project ID does not match any project.");
  }

  return (
    <Box sx={{ backgroundColor: "rgba(0,0,0,0.04)" }}>
      <Grid container columnSpacing="4vw" rowSpacing="2vw" m="0 4vw">
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} display="flex" mt="1vw">
          <Box component="img" src={project.img} alt={project.alt} height="75px" />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h5">{project.title}</Typography>
            <Typography variant="body2" color="text.secondary">{project.subtitle}</Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={7} xl={7} mb="2vw">
          <Carousel content={project.media} />
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={5} xl={5} display="flex" flexDirection="column" gap="1vw">
          <Typography variant="subtitle2" align="right" gutterBottom>
            Launched in
            {" "}
            {project.date}
            .
          </Typography>
          {project.description.map(line => (
            <Typography variant="body1" align="justify" key={line}>
              &emsp;&emsp;
              {line}
            </Typography>
          ))}
          <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" alignItems="center">
            <Button
              sx={{ width: "70%", mx: "auto", my: "1vw" }}
              variant="contained"
              size="medium"
              disabled={!project.link}
              component="a"
              href={project.link}
            >
              Link to the project
            </Button>
            {project.owned
              ? undefined
              : (
                <Typography variant="overline" align="center" sx={{ width: "70%", lineHeight: 1.5, fontSize: "0.6rem" }}>
                  (Please note this project could be taken offline at any moment as I don&apos;t own it)
                </Typography>
              )}
            {project.github ? <GitHubIconButton /> : undefined}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

}

export default Project;
