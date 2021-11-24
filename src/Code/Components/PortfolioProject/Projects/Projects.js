import React from "react";
import "./Projects.scss";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Footer from "../../Footer/Footer";
import YouTube from "./YouTube";
import Static from "./Static";
import Myntra from "./Myntra"
import Gaana from "./Gaana"
import CoWin from "./CoWin"
import Home from "../Home/Home";


const ProjectDetails = [
  {
    img: "process.env.PUBLIC_URL + ../../Images/youtube.jpg",
    header: "1. YouTube Project cloned with HTML, CSS, BootsTrap & JavaScript",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    path: "/youtube",
    youtubeLink: "https://www.youtube.com/watch?v=MFV4WSxAnjs&t=30s",
    singleProjectDetails: <YouTube/>,
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/mintra.jpg",
    header: "2. Myntra Project cloned with React, and Material-ui (mui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink:
      "https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA/playlists",
      singleProjectDetails: <YouTube/>,
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/gaana.jpg",
    header: "3. Gaana Project cloned with HTML, CSS & BootsTrap",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "https://www.youtube.com/watch?v=qxvtOmXSHCc",
    singleProjectDetails: <YouTube/>,
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/cowin.jpg",
    header: "4. CoWIN Project cloned with React, and Material-ui (mui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "https://www.youtube.com/watch?v=Y6z2GuEu1f0&t=25s",
    singleProjectDetails: <YouTube/>,
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/form.jpg",
    header: "4. Google Form created from scratch using Material-ui (mui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink:
      "https://www.youtube.com/watch?v=U3ZXQkdx1pY&list=PLiuOhj6PP4klXq3E8pF-og9UfzmgT4par&index=2",
      singleProjectDetails: <YouTube/>,
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/static.jpg",
    header: "5. Static Website created from scratch using HTML, CSS, BootsTrap",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "https://www.youtube.com/watch?v=tQ1dn55q8jA&t=262s",
    singleProjectDetails: <YouTube/>,
    projectPage: "/Static"
    
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
                 <Link to="/">
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      startIcon={<DescriptionIcon />}
                    >
                      Blog
                    </Button>
                    </Link>
                  <Routes>
                    <Route path={project.projectPage}
                      exact
                      element={project.singleProjectDetails}
                     
                    />
                  </Routes>

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
      <YouTube /><Static /> <Myntra />
      <Gaana />
      <CoWin />

    </>
  );
};

export default Projects;
