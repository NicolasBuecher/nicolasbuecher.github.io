import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectList from "./ProjectList";


/**
 * Returns a React component displaying the "./projects" page.
 *
 * @returns {JSX.Element}
 */
function Projects(): JSX.Element {

  return (
    <Grid container m="0" sx={{ backgroundColor: "rgba(0,0,0,0.04)" }}>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12} display="flex" justifyContent="center" mt="3vw" mb="2vw">
        <Typography variant="h4" fontSize="2rem" fontWeight="500">MY PROJECTS</Typography>
      </Grid>
      <Grid container spacing="3vw" m="0 4vw" display="flex" justifyContent="center">
        {ProjectList.map(({ id, img, alt, title, subtitle }) => (
          <Grid xs={6} sm={4} md={3} lg={3} xl={2.2} key={id}>
            <ProjectCard
              img={img}
              alt={alt}
              title={title}
              subtitle={subtitle}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

}

export default Projects;
