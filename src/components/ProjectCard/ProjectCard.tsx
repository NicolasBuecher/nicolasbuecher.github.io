import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


interface ProjectCardProps {
  id: number;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}

/**
 * Returns a React component displaying a project card preview and handling the open project event.
 *
 * @param {number} props.id Project identifier
 * @param {string} props.img Project preview image to display
 * @param {string} props.alt Alt text for the project preview image
 * @param {string} props.title Project title
 * @param {string} props.subtitle Project subtitle
 * @returns
 */
function ProjectCard({ id, img, alt, title, subtitle }: ProjectCardProps): JSX.Element {

  return (
    <Card sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
      <CardActionArea component={Link} to={`/projects/${id}`}>
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
