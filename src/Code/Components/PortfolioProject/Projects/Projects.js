import React from "react";
import "./Projects.scss";
import { Routes, Route, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { motion } from "framer-motion";
import YouTubeProject from "./YouTubeProject";
import Static from "./Static";
import Myntra from "./Myntra";
import Gaana from "./Gaana";
import CoWin from "./CoWin";
import Slack from "./Slack";
import WhatsApp from "./WhatsApp";
import Footer from "../../Footer/Footer";


const ProjectDetails = [
  {
    img: "process.env.PUBLIC_URL + ../../Images/youtube.jpg",
    header: "1. YouTube Project cloned with HTML, CSS, BootsTrap & JavaScript",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    path: "/youtube",
    youtubeLink: "https://www.youtube.com/watch?v=MFV4WSxAnjs&t=30s",
    singleProjectDetails: <YouTubeProject />,
    projectpath: "/youtube",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/mintra.jpg",
    header: "2. Myntra Project cloned with React, and Material-ui (mui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink:
      "https://www.youtube.com/watch?v=ege7EYue2RE&t=3s",
    singleProjectDetails: <Myntra />,
    projectpath: "/myntra",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/gaana.jpg",
    header: "3. Gaana Project cloned with HTML, CSS & BootsTrap",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "https://www.youtube.com/watch?v=qxvtOmXSHCc",
    singleProjectDetails: <Gaana />,
    projectpath: "/gaana",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/cowin.jpg",
    header: "4. CoWIN Project cloned with React, and Material-ui (mui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "https://www.youtube.com/watch?v=Y6z2GuEu1f0&t=25s",
    singleProjectDetails: <CoWin />,
    projectpath: "/cowin",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/form.jpg",
    header: "4. Google Form created from scratch using Material-ui (mui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink:
      "https://www.youtube.com/watch?v=U3ZXQkdx1pY&t=179s",
    singleProjectDetails: <CoWin />,
    projectpath: "/google-form",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/static.jpg",
    header: "5. Static Website created from scratch using HTML, CSS, BootsTrap",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "https://www.youtube.com/watch?v=tQ1dn55q8jA&t=262s",
    singleProjectDetails: <Static />,
    projectpath: "/youtube",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/whatsapp.jpg",
    header: "6. WhatsApp Clone from scratch using React, MUI(material-ui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "",
    singleProjectDetails: <WhatsApp />,
    projectpath: "/whatsapp",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/slack.jpg",
    header: "7. Slack Clone from scratch using React, MUI(material-ui)",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate laboriosam officia aliquam voluptas, distinctio ipsa sequi, eveniet ipsum corporis nam cum nulla facere unde autem?",
    youtubeLink: "",
    singleProjectDetails: <Slack />,
    projectpath: "/slack",
  },
];

const Projects = () => {
  return (
    <>
      <div className="Projects">
        <div className="Projects--bgImg">
          <motion.h1 
          initial={{ opacity: 0, x:-100 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ duration: .5 }}
          className="Projects--bgImg--h1">Projects</motion.h1>
        </div>
<div className="Projects--details">
        {ProjectDetails.map((project) => (
          <>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="Projects--details--single"
            >
              <Card className="Projects--details--single--card">
                <CardActionArea>
                  <CardMedia component="img" image={project.img} alt="" />
                  <CardContent>
                    <Typography>{project.header}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to="{project.projectpath}" className="Projects--details--single--card--btn">
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
                    <Route
                      path={project.projectpath}
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
                    target="_blank"
                    startIcon={<VideoLibraryIcon />}
                  >
                    Video
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </>
        ))}
      </div>
      </div>
      <Footer />
      {/* <YouTube /><Static /> <Myntra />
      <Gaana />
      <CoWin /> */}
    </>
  );
};

export default Projects;
