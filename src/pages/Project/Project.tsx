import GitHub from "@mui/icons-material/GitHub";
import Info from "@mui/icons-material/Info";
import Visibility from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import ProjectButton from "../../components/ProjectButton/ProjectButton";
import ProjectList from "../../data/ProjectList";
import parseIntStrict from "../../helpers/parseIntStrict";
import NotFound from "../NotFound/NotFound";


/**
 * Returns a React component displaying the "./projects/:id" page.
 *
 * @returns {JSX.Element}
 */
function Project(): JSX.Element {

  const { id } = useParams();

  if (!id) {
    return <NotFound>No project id</NotFound>;
  }

  const parsedId = parseIntStrict(id);
  if (parsedId === undefined) {
    return <NotFound>Invalid project id</NotFound>;
  }

  const project = ProjectList[parsedId];
  if (project === undefined) {
    return <NotFound>Project id doesn&apos;t exist</NotFound>;
  }

  return (
    <Box bgcolor="rgba(0,0,0,0.04)">
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
          <Box display="flex" flexDirection="column" alignItems="center" my="2vw">
            <ProjectButton startIcon={<Visibility />} link={project.link}>
              See the project
            </ProjectButton>
            <ProjectButton startIcon={<Info />} link={project.details}>
              Project details
            </ProjectButton>
            <ProjectButton startIcon={<GitHub />} link={project.github}>
              GitHub repository
            </ProjectButton>
            {project.owned
              ? undefined
              : (
                <Typography
                  variant="overline"
                  align="center"
                  sx={{ width: "70%", my: ".5vw", fontSize: "0.6rem", lineHeight: "1.5" }}
                >
                  (Please note this project could be taken offline at any moment as I don&apos;t own it)
                </Typography>
              )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

}

export default Project;
