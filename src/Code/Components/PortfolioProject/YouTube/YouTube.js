import React from "react";
import "./YouTube.scss";
import Footer from "../../Footer/Footer";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const YouTube = () => {
  return (
    <>
      <div className="youtube">
        <div className="youtube--main">
          <h1 className="youtube--main--name">My YouTube Videos</h1>
        </div>
        <div className="youtube--video">
          <KeyboardBackspaceIcon />
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MFV4WSxAnjs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{ boxShadow: " 3px 3px 10px #3b2930", border: "3px solid rgba(255, 93, 93, 0.938)" }}
            ></iframe>
          </div>
          <ArrowRightAltIcon />
        </div>
        <center className="youtube--video2">
          <h2 style={{ marginBottom: "-10px" }}>
            YouTube-clone design from scratch using <br /> HTML, CSS,
            JavaScript
          </h2>
          <p>First project, personal experience and personal trics</p>
          <Button href="https://www.youtube.com/watch?v=MFV4WSxAnjs&t=31s" variant="outlined" size="lg" color="error" rounded sx={{ px: 2 }}>
            Watch Video
          </Button>
        </center>
      </div>
      <Footer />
    </>
  );
};

export default YouTube;
