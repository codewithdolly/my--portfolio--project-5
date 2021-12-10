import React from "react";
import "./About.scss";
import Plane from "../../Images/plane.gif";
import myImg from "../../Images/dolly.jpg";
import Dolly from "../../Images/d3.png";
import Footer from "../../Footer/Footer";
import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about--main">
          <img src={Plane} alt="plane" />
          <h1 className="about--main--name">Dolly Singh</h1>
        </div>
        <div className="about--intro">
          <div className="about--intro1">
            <img className="about--intro1--img" src={Dolly} alt="Dolly" />
            <div className="about--socialLink">
              <a href="https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA">
                <span
                  className="fab fa-youtube"
                  style={{ color: "red", paddingRight: "10px" }}
                ></span>
              </a>
              <a href="https://www.facebook.com/intensedolly">
                <span
                  className="fab fa-facebook-square"
                  style={{ color: "#3b5998", paddingRight: "10px" }}
                ></span>
              </a>
              <a href="https://www.linkedin.com/in/codewithdolly/">
                <span
                  className="fab fa-linkedin"
                  style={{ color: "#287bbc", paddingRight: "10px" }}
                ></span>

                <a href="https://www.instagram.com/codewithdolly">
                  <span class="fab fa-instagram instagram"></span>
                </a>
              </a>
              <a href="mailto: heydollysingh@gmail.com">
                <span
                  className="far fa-envelope"
                  style={{ color: "#b32d00", paddingRight: "10px" }}
                ></span>
              </a>
            </div>
          </div>
          <div className="about--intro2">
            <h2 className="about--intro2--h2">About me.</h2>
            <div className="about--intro2--info">
              <p>
                Hello! I am Dolly Singh, Web developer, Digital marketer and a
                YouTuber. I live in Hyderabad, India. I am Full stack developer
                and I have build some projects on wordpress Elementor.I also
                know basic about SEO. I have Youtube Channel where I upload my
                project's video and many more things.
              </p>
              <p>
                Have a Look at My 
                <a
                  href="https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA"
                  style={{ color: "gray" }}
                > Youtube </a> 
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
                endIcon={<ArrowRightAltIcon />}
                className="about--intro2--btns--contact"
              >
                Contact me
              </Button>
              <Button startIcon={<FileDownloadOutlinedIcon />}>
                Download CV
              </Button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
