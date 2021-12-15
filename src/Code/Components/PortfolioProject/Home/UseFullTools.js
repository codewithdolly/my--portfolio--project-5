import React from "react";
import "./UseFullTools.scss";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Images = [
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/brave.png",
    alt: "Brave",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/canva.png",
    alt: "Canva",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/firebase.png",
    alt: "Firebase",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/git.png",
    alt: "Git",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/github.png",
    alt: "Github",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/google.png",
    alt: "Google",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/mui.png",
    alt: "MUI (material-ui)",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/Skype.png",
    alt: "Skype",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/slack.png",
    alt: "Slack",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/vscode.png",
    alt: "Vscode",
  },
];

const UseFullTools = () => {
  return (
    <>
      <div className="useFullTools">
        <div className="useFullTools--Weapons">
          <div className="useFullTools--Weapons--icon">
            <DoubleArrowIcon sx={{ mx: 1, color: "white" }} />
            <div className="useFullTools--Weapons--Weapons--name">
            Weapons
            </div>
          </div>
          <h1 className="useFullTools--Weapons--favoriteTools">
            These are my all-time favorite <span>Weapons</span>
          </h1>
          <p>
            I always loved those software that I use in my work, because I am
            very good at these, these are the main tools of my design career
            those are help me for make sure my Clients satisfaction.
          </p>
          <Button
            className="useFullTools--Weapons--btn"
            endIcon={<ArrowRightAltIcon />}
            variant="text"
            href="http://localhost:3000/projects"
          >
            Let's see my work process
          </Button>
        </div>

        <div className="useFullTools--WeaponsImg">
          {Images.map((image) => {
            return (
              <>
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
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseFullTools;
