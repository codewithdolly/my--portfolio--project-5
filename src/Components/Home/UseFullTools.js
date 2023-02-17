import React from "react";
import "./UseFullTools.scss";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";


const UseFullTools = () => {
  return (
    <>
      <div className="useFullTools">
        <div className="useFullTools--Weapons">
          <div className="useFullTools--Weapons--icon">
            <DoubleArrowIcon sx={{ mx: 1, color: "white" }} />
            <div className="useFullTools--Weapons--Weapons--name">Weapons</div>
          </div>
          <h1 className="useFullTools--Weapons--favoriteTools">
            These are my all-time favorite <span>Weapons</span>
          </h1>
          <p>
            I always love those software and use in my daily work, because I am
            very good at these, these are the main tools of my design career
            those are help me for make sure my Clients satisfaction.
          </p>
          <Link to="/projects" > 
          <Button
            className="useFullTools--Weapons--btn"
            endIcon={<ArrowRightAltIcon />}
            variant="text"
         
          >
          Let's see my work process
           
          </Button>
          </Link>
        </div>

        <div className="useFullTools--WeaponsImg">
          {Images.map((image) => {
            return (
              <>
                {" "}
                <a href={image.link} target="_blank" rel="noreferrer">
                  {" "}
                  <motion.img
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.2, opacity: 1 }}
                    whileTap={{
                      scale: 0.8,
                      borderRadius: "100%",
                    }}
                    transition={{ duration: 0.5 }}
                    src={image.imgPath}
                    alt={image.alt}
                    name={image.alt}
                    className="useFullTools--WeaponsImg--image"
                  />
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseFullTools;


const Images = [
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/brave.png",
    alt: "Brave",
    link: "https://brave.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/canva.png",
    alt: "Canva",
    link: "https://www.canva.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/firebase.png",
    alt: "Firebase",
    link: "https://firebase.google.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/git.png",
    alt: "Git",
    link: "https://git-scm.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/github.png",
    alt: "Github",
    link: "https://github.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/google.png",
    alt: "Google",
    link: "https://www.google.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/mui.png",
    alt: "MUI (material-ui)",
    link: "https://mui.com/",
  },

  {
    imgPath: "process.env.PUBLIC_URL +../../Images/devtool.png",
    alt: "Devtool",
    link: "https://developer.chrome.com/docs/devtools/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/bootstrap.png",
    alt: "Bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/slack.png",
    alt: "Slack",
    link: "https://slack.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/vscode.png",
    alt: "Vscode",
    link: "https://code.visualstudio.com/",
  },

  {
    imgPath: "process.env.PUBLIC_URL +../../Images/analitics.png",
    alt: "analitcs",
    link: "https://analytics.google.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/react.png",
    alt: "React",
    link: "https://reactjs.org/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/elementor.png",
    alt: "Elementor",
    link: "https://elementor.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/redux.png",
    alt: "Redux",
    link: "https://redux.js.org/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/fontawesome.png",
    alt: "Fontawesome",
    link: "https://fontawesome.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/searchconsole.png",
    alt: "Search Console",
    link: "hhttps://search.google.com/search-console/welcome",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/wordpress.png",
    alt: "Wordpress",
    link: "https://wordpress.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/envato.png",
    alt: "Envato",
    link: "https://www.envato.com/",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/motion.png",
    alt: "Framer Motion",
    link: "https://www.framer.com/motion/",
  },
];
