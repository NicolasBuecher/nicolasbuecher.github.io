import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


interface ProjectCardProps {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}

/**
 * Returns a React component displaying a project card preview and handling the open project event.
 *
 * @param props.img Project preview image to display
 * @param props.alt Alt text for the project preview image
 * @param props.title Project title
 * @param props.subtitle Project subtitle
 * @returns
 */
function ProjectCard({ img, alt, title, subtitle }: ProjectCardProps): JSX.Element {

  return (
    <Card sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
      <CardActionArea component={Link} to="/">
        <CardMedia
          component="img"
          alt={alt}
          image={img}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography gutterBottom variant="h5" align="center">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

}

export default ProjectCard;
