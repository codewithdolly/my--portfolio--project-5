import React from "react";
import "./Projects.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Footer from "../../Footer/Footer";

const ProjectDetails = [
  {
    img: "process.env.PUBLIC_URL + ../../Images/youtube.jpg",
    header: "1. YouTube Project cloned with HTML, CSS, BootsTrap & JavaScript",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "https://www.youtube.com/watch?v=MFV4WSxAnjs&t=30s",
  },
  
  {
    img: "process.env.PUBLIC_URL + ../../Images/mintra.jpg",
    header: "4. Myntra Project cloned with React, and Material-ui (mui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink:
      "https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA/playlists",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/gaana.jpg",
    header: "6. Gaana Project cloned with HTML, CSS & BootsTrap",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "https://www.youtube.com/watch?v=qxvtOmXSHCc",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/cowin.jpg",
    header: "5. CoWIN Project cloned with React, and Material-ui (mui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "https://www.youtube.com/watch?v=Y6z2GuEu1f0&t=25s",
  },
  
  {
    img: "process.env.PUBLIC_URL + ../../Images/form.jpg",
    header: "3. Google Form created from scratch using Material-ui (mui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink:
      "https://www.youtube.com/watch?v=U3ZXQkdx1pY&list=PLiuOhj6PP4klXq3E8pF-og9UfzmgT4par&index=2",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/static.jpg",
    header: "2. Static Website created from scratch using HTML, CSS, BootsTrap",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "https://www.youtube.com/watch?v=tQ1dn55q8jA&t=262s",
  },
 
];

const Projects = () => {
  return (
    <>
      <div className="Projects">
        <div className="Projects--bgImg">
          <h1 className="Projects--bgImg--h1">Projects</h1>
        </div>
        {ProjectDetails.map((project) => (
          <>
            <div className="Projects--details">
              <Card className="Projects--details--card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image={project.img}
                    alt=""
                  />
                  <CardContent>
                    <Typography>{project.header}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    startIcon={<DescriptionIcon />}
                  >
                    More
                  </Button>
                  <Button
                    sx={{ ml: 2 }}
                    href={project.youtubeLink}
                    size="small"
                    color="error"
                    variant="outlined"
                    startIcon={<VideoLibraryIcon />}
                  >
                    Video
                  </Button>
                </CardActions>
              </Card>
            </div>
          </>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Projects;
