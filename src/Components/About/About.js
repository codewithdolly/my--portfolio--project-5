import React from "react";
import "./About.scss";
import Dolly from "../Images/d2.png";
import Footer from "../Footer";
import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about--main">
          <motion.h1 
           initial={{ opacity: 0, x:-100 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ duration: .5 }}
          className="about--main--name">Dolly Singh</motion.h1>
        </div>
        <div className="about--intro">
          <div className="about--intro1">
            <img className="about--intro1--img" src={Dolly} alt="Dolly" />
          </div>
          <div className="about--intro2">
            <h2 className="about--intro2--h2">About me.</h2>
            <div className="about--intro2--info">
              <p>
                Hello! I am Dolly Singh, Web developer, Digital marketer and a
                YouTuber. I live in Hyderabad, India. I am Frontend Developer
                and I have build some projects on wordpress Elementor.I also
                know basic about SEO. I have Youtube Channel where I upload my
                project's video and many more things.
              </p><br />
              <p>
                Have a Look at My
                <a
                  href="https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA"
                  style={{ color: "rgba(255, 255, 255, 0.63)" }}
                >
                  {" "}
                  Youtube{" "}
                </a>
                Channel, It will Students/developer to learn thing in easy ways
                and help you to make projects. Or you can connect me on
                Facebook, Linkdin or Instagram. I am always excited to talk
                about Tech.
              </p>
            </div>
            <div className="about--intro2--contact">
              <div className="about--intro2--contact--info">
                <div>
                  <h4>Name:</h4>
                  <p>Dolly Singh</p>
                </div>
                <div>
                  <h4>Phone:</h4>
                  <p>+91 6300-810-401</p>
                </div>
              </div>
              <div className="about--intro2--contact--info">
                <div>
                  <h4>Email:</h4>
                  <p>heydollysingh@gmail.com</p>
                </div>
                <div>
                  <h4>LinkedIn:</h4>
                  <p>@CodeWithDolly</p>
                </div>
              </div>
            </div>
            <div className="about--intro2--btns">
              <Button
               href="tel: 6300810401"
                endIcon={<ArrowRightAltIcon />}
                className="about--intro2--btns--contact"
              >
                Contact me
              </Button>
              <Button 
                className="about--intro2--btns--cv"
              href="https://www.canva.com/design/DAEoT0cl6mY/XIlQ8gdNusCwWlsIFIBOnA/view?utm_content=DAEoT0cl6mY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
              startIcon={<FileDownloadOutlinedIcon />}>
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
