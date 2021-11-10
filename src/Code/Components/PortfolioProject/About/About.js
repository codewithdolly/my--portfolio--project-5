import React from "react";
import "./About.scss";
import Plane from "../../Images/plane.gif";
import myImg from "../../Images/dolly.jpg";
import Footer from "../../Footer/Footer";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about--main">
          <img src={Plane} alt="plane" className="about--main--img" />
          <h1 className="about--main--name">Dolly Singh</h1>
        </div>
        <div className="about--intro">
          <div className="about--intro1">
            <img
              className="about--intro1--img"
              src={myImg}
              alt="Dolly"
              width="220px"
            />
            <div
              style={{ fontSize: "35px", padding: "10px", paddingLeft: "20px" }}
            >
              <a href="https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA">
                <span
                  class="fab fa-youtube"
                  style={{ color: "red", paddingRight: "10px" }}
                ></span>
              </a>
              <a href="https://www.facebook.com/intensedolly">
                <span
                  class="fab fa-facebook-square"
                  style={{ color: "#3b5998", paddingRight: "10px" }}
                ></span>
              </a>
              <a href="https://in.linkedin.com/in/intensedolly">
                <span
                  class="fab fa-linkedin"
                  style={{ color: "#287bbc", paddingRight: "10px" }}
                ></span>
              </a>
              <a href="mailto: heydollysingh@gmail.com">
                <span
                  class="far fa-envelope"
                  style={{ color: "#b32d00", paddingRight: "10px" }}
                ></span>
              </a>
            </div>
          </div>
          <div className="about--intro2">
            <h2 className="about--intro2--h2">About me.</h2>
            <p>
              Hello! I am Dolly Singh, Web developer, Digital marketer, YouTuber and Student, I live in Hyderabad, India. I am Full stack developer and I have build some projects on wordpress Elementor. I manage one food website with 1,00,000 per month. I also do SEO and write articles for my websites. I have Youtube Channel where I upload my projects video and many more things. 
            </p>
            <p>
             Have a Look at My YouTube Channel, It will Students/developer to learn thing in easy ways and help you to make projects. Or you can connect me on Facebook, Linkdin or Instagram.  I am always excited to talk about Tech.  
            </p>
          </div>
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default About;
