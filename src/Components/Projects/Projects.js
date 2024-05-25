import React from "react";
import "./Projects.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { motion } from "framer-motion";
import CallMadeIcon from '@mui/icons-material/CallMade';
import Footer from "../Footer";
import FactsAndStats from "../Home/FactsAndStats";
import { Outlet, Link } from "react-router-dom";
// import LiveProject from "./LiveProject";

const Projects = () => {
  return (
    <>
      <div className="Projects">
        <div className="Projects--bgImg">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 2, x: 0 }}
            transition={{ duration: 0.5 }}
            className="Projects--bgImg--h1"
          >
            Projects
          </motion.h1>
        </div>

<div className="companies m-2" style={{margin: "auto", width:"80%", display:"flex", flexWrap:"wrap", alignContent:"space-evenly"}}>
{/* <img src={process.env.PUBLIC_URL + ../../Images/mantrang1.jpg} /> */}
<img src="../../Images/Companies/Avontix.png" alt="Avontix" width="auto" height="auto" />
<img src="../../Images/Companies/Stablx.png" alt="Stablx" width="auto" height="auto" />
<img src="../../Images/Companies/Mantarang.png" alt="Mantarang" width="auto" height="auto" />
<img src="../../Images/Companies/360.png" alt="360 Technology" width="auto" height="auto" />
<img src="../../Images/Companies/Mixcommerce.png" alt="Mixcommerce" width="auto" height="auto" />
<img src="../../Images/Companies/MixPhotos.png" alt="MixPhotos" width="auto" height="auto" />
</div>
       
        {/* <div className="Projects--details">
        <h2 className="Projects--skills">Live Projects</h2>
        <p className="Projects--border">~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
          {LiveProjectDetails.map((project) => (
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
                      <Typography className="Projects--details--single--card--header">
                      {project.header}
                      </Typography>
                      <Typography
                        className="Projects--details--single--card--content"
                        variant="body2"
                        color="text.secondary"
                      >
                        {project.content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      href={project.websitepath}
                      target="_blank"
                      size="medium"
                      className="Projects--details--single--card--visitsidebtn"
                      fullWidth
                      // style={{backgroundColor:"black"}}
                      variant="contained"
                      sx={{ mb: 2 }}
                      // startIcon={<GitHubIcon />}
                      endIcon={<CallMadeIcon />}

                    >
                      Visit website
                    </Button>
                   
                  </CardActions>
                </Card>
              </motion.div>
            </>
          ))}
        </div> */}

       
        <div className="Projects--details">
        <h2 className="Projects--skills">Projects</h2>
        <p className="Projects--border">~~~~~~~~~~~~~~~~~~</p>
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
                      <Typography className="Projects--details--single--card--header">
                        <Link to={project.singleProjectPath}>
                          {" "}
                          {project.header}
                        </Link>
                      </Typography>
                      <Typography
                        className="Projects--details--single--card--content"
                        variant="body2"
                        color="text.secondary"
                      >
                        {project.content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      href={project.projectpath}
                      target="_blank"
                      size="small"
                      style={{backgroundColor:"black"}}
                      variant="contained"
                      sx={{ mb: 2 }}
                      startIcon={<GitHubIcon />}
                      // endIcon={<CallMadeIcon />}

                    >
                      Code<CallMadeIcon />
                    </Button>
                    <Button
                      sx={{ mb: 2 }}
                      href={project.youtubeLink}
                      target="_blank"
                      size="small"
                      className="projectBtn"
                      color="error"
                      variant="outlined"
                      startIcon={<VideoLibraryIcon />}
                      // endIcon={<CallMadeIcon />}
                    >
                      Video<CallMadeIcon />
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </>
          ))}
        </div>
      </div>
      <FactsAndStats />
      <Footer />
      <Outlet />
    </>
  );
};

export default Projects;

const LiveProjectDetails = [
  {
    img: "process.env.PUBLIC_URL + ../../Images/stablx1.jpg",
    header: "STABLX- Service based compan in Hyderabad, India.",
    content:
      "Estimate time, technology, Resources and Execution cost of your project. I worked there as a content writer, Marketer, researcher and web developer.",
    websitepath: "https://www.stablx.com/",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/mantrang1.jpg",
    header: "Mantrang EdTech LLP - Company",
    content:
      "Mantrang Edtech Llp is a Limited Liability Partnership firm incorporated on 23 October 2020. And I had the opportunity to work on this project as part of a dynamic team of two as a freelance Web designer.",
    websitepath: "https://mantrangedtech.com/",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/amaySolution1.jpg",
    header: "Amay Design Solutions",
    content:
      "AMAY Design solution is a full-service client market-specific consultancy firm based in Jalgaon, India. And I had the opportunity to work on this project as part of a dynamic team of two as a freelance Web designer.",
    websitepath: "https://amaydesignsolutions.com/",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/360.png",
    header: "360 Technology",
    content:
      "360 Technology delivers digital transformation and technology services from ideation to execution, enabling Global clients. I worked there as full time frontend developer and build project on Reactjs and Nextjs.",
    websitepath: "https://360.technology/",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/mixcommerce1.png",
    header: "Mixcommerce",
    content:
      "MixCommerce is a free CRM for startups. Its a marketing and technology company based in Bangalore India. We build software that simplifies marketing for businesses.",
    websitepath: "https://www.mixcommerce.co/",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/photos.mixcommerce.png",
    header: "Photos.mixmmerce",
    content:
      "MixPhotos. MixPhotos is free Indian stock photo website. Anyone can use photos for their business or individual needs for free. ",
    websitepath: "https://photos.mixcommerce.co/",
  },
  
];

const ProjectDetails = [
  {
    img: "process.env.PUBLIC_URL + ../../Images/static.jpg",
    header: "1. Static Website created from scratch using HTML, CSS, BootsTrap",
    content:
      "This is My First project. I hadto build this from scratch using HTML, CSS and JavaScript. To make this project We got 3 days and we  had to build 12+ page. By the way i got this project in team and there was 3 member.",
    youtubeLink: "https://www.youtube.com/watch?v=tQ1dn55q8jA&t=262s",
    singleProjectPath: "/projects/static",
    projectpath: "https://github.com/hcmay2021-Dolly/static-website_project_1",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/youtube.jpg",
    header: "2. YouTube Project done with HTML, CSS, BootsTrap & JavaScript",
    content:
      "YouTube is my Second project and I was quite happy and excited for this project, because Its a big project. Again I made this project from scatch using HTML, CSS, JavaScript & Bootstrap. I have made this project alone.",
    path: "/youtube-project",
    youtubeLink: "https://www.youtube.com/watch?v=MFV4WSxAnjs&t=30s",
    singleProjectPath: "/projects/youtube",
    projectpath: "https://github.com/hcmay2021-Dolly/youtube-clone_project_2",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/gaana.jpg",
    header: "3. Gaana Project Projectd with HTML, CSS & BootsTrap",
    content:
      "We listen ganna everyday. to again this project was exciting project. And I hade to make this project from Scratch using HTML, CSS and Bootstrap. To make this project i got 2 days.",
    youtubeLink: "https://www.youtube.com/watch?v=qxvtOmXSHCc",
    singleProjectPath: "/projects/gaana",
    projectpath:
      "https://github.com/hcmay2021-Dolly/Small_Projects/tree/main/project04--%20Gaana.com",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/cowin.jpg",
    header: "4. CoWIN Project done with React, and MUI (Material-ui)",
    content:
      "This Project has done from scratch using MUI (material-UI) and React. I was new In react so I was getting lot of confusin but finall its done in 2 days.",
    youtubeLink: "https://www.youtube.com/watch?v=Y6z2GuEu1f0&t=25s",
    singleProjectPath: "/projects/cowin",
    projectpath:
      "https://github.com/codewithdolly/react--Cowin--Project_project_3",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/form.jpg",
    header: "5. Google Form created from scratch using Material-ui (mui)",
    content:
      "Actually This project i haven't got from HiCoder. But there we were getting Attendance sheet. So I thought to make that. I have used MUI(material-UI) and React.",
    youtubeLink: "https://www.youtube.com/watch?v=U3ZXQkdx1pY&t=179s",
    singleProjectPath: "/projects/google-form",
    projectpath:
      "https://github.com/hcmay2021-Dolly/hicoder--googleform--project11",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/mintra.jpg",
    header: "6. Myntra Project done with React, and Material-ui (mui)",
    content:
      "This Myntra Project I got in Diwali time. I hade to clone this and add new features as well. So I build this from scratch using MUI(material-ui) and React.",
    youtubeLink: "https://www.youtube.com/watch?v=ege7EYue2RE&t=3s",
    singleProjectPath: "/projects/myntra",
    projectpath: "https://github.com/hcmay2021-Dolly/react--Myntra--Project-4",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/whatsapp.jpg",
    header: "7. WhatsApp Project from scratch using React, MUI(material-ui)",
    content:
      "WhatsApp web in one day project and I wanted to build Chat box so I build this project and completed in just one day. To make this I have used  MUI(material-ui) and React.",
    youtubeLink: "https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA",
    singleProjectPath: "/projects/whatsapp-web",
    projectpath:
      "https://github.com/hcmay2021-Dolly/hicoder--whatsapp--web--project-6",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/slack.jpg",
    header: "8. Slack Project from scratch using React, MUI(material-ui)",
    content:
      "Slack is a very Big project. and its very usefull. Slack can be used in office, collage Or anywhere. So I got this project. To build this I have used  MUI(material-ui), React and many other packages.",
    youtubeLink: "https://youtu.be/AJVZhCVGQ-o",
    singleProjectPath: "/projects/slack",
    projectpath: "https://github.com/hcmay2021-Dolly/hicoder--slack--project-7",
  },

  {
    img: "process.env.PUBLIC_URL + ../../Images/instagram.jpg",
    header: "9. Instagram Project design with MUI(material-ui) and react",
    content:
      "This Project I got to build in 2 days. I was new in react. So I was quite confused building it. But I learnt so  many Things in React and MUI(material-UI)",
    youtubeLink: "https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA",
    singleProjectPath: "/projects/instagram",
    projectpath:
      "https://github.com/hcmay2021-Dolly/hicoder--instagram--clone--project-09",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/stackoverflow.jpg",
    header:
      "10. Stack Overflow clone from Scratch using React, Scss and Bootstrap",
    content:
      "This is the second project which take longer times to build. I have not just build this project but also I have change design at some place. Because I thouse that it might look more good.",
    youtubeLink: "https://youtu.be/7KOjDoms_b4",
    singleProjectPath: "/projects/stack-overflow",
    projectpath:
      "https://github.com/hcmay2021-Dolly/hicoder--stackoverflow--project-8",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/ecommerce.png",
    header: "11. E-Commers website using API and Redux",
    content:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo commodi molestias velit impedit doloribus. Blanditiis odit beatae repellat quia, id minus quibusdam sunt expedita, optio quasi nisi suscipit doloribus exercitationem?",
    youtubeLink: "https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA",
    singleProjectPath: "/projects/ecommerce",
    projectpath:
      "https://github.com/codewithdolly/hicoder-ecommers-redux--project-12",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/bigbangbank.png",
    header: "12. Big Bang Best Project using bootstrap",
    content:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo commodi molestias velit impedit doloribus. Blanditiis odit beatae repellat quia, id minus quibusdam sunt expedita, optio quasi nisi suscipit doloribus exercitationem?",
    youtubeLink: "https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA",
    singleProjectPath: "/projects/big-bang-best",
    projectpath:
      "https://github.com/codewithdolly/big-bang-best-bootstrap--project-15",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/blog.png",
    header: "13. Blog Website uing React and CRUD",
    content:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo commodi molestias velit impedit doloribus. Blanditiis odit beatae repellat quia, id minus quibusdam sunt expedita, optio quasi nisi suscipit doloribus exercitationem?",
    youtubeLink: "https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA",
    singleProjectPath: "/projects/blog",
    projectpath:
      "https://github.com/codewithdolly/crud01--blog-website--project-16",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/twn.png",
    header: "14. News Website using Nextjs",
    content:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo commodi molestias velit impedit doloribus. Blanditiis odit beatae repellat quia, id minus quibusdam sunt expedita, optio quasi nisi suscipit doloribus exercitationem?",
    youtubeLink: "https://youtu.be/LAsILX5zH5g",
    singleProjectPath: "/projects/tic-tack-toe",
    projectpath: "https://github.com/codewithdolly/TickTackToe--Game-project1",
  },
  {
    img: "process.env.PUBLIC_URL + ../../Images/ticktacktoe.jpg",
    header: "15. Tic Tack Toe Game using Reactjs",
    content:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo commodi molestias velit impedit doloribus. Blanditiis odit beatae repellat quia, id minus quibusdam sunt expedita, optio quasi nisi suscipit doloribus exercitationem?",
    youtubeLink: "https://youtu.be/LAsILX5zH5g",
    singleProjectPath: "/projects/tic-tack-toe",
    projectpath: "https://github.com/codewithdolly/TickTackToe--Game-project1",
  },
];
