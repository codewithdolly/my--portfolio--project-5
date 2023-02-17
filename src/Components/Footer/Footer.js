import React from "react";
import "./Footer.scss";
import { Button } from "@material-ui/core";
// import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ScrollButton from "./ScrollBtn/scrollBtn";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <h2 target="_blank" className="footer--btn">
          Get In Touch
        </h2>
        <div className="footer--connect">
          {socialMedia.map((social) => {
            return (
              <div className="footer--connect--social">
                <div className="footer--connect--social--Icon ">
                  {social.icon}
                </div>
                <p className="footer--connect--social--type">{social.type}</p>
                <p className="footer--connect--social--add">{social.add}</p>
                <p className="footer--connect--social--add">{social.add2}</p>
              </div>
            );
          })}
        </div>

        <div className="footer--moreInfo">
          <div className="footer--moreInfo--SocialIcons">
            <h2>Let’s Connect</h2>
            <div className="footer--moreInfo--SocialIcons--social">
              {SocialIcon.map((social) => {
                return (
                  <a
                  target="_blank"
                    href={social.link}
                    rel="noreferrer"
                    className="footer--moreInfo--SocialIcons--social--icon"
                  >
                    {social.icon}
                    <p>{social.name}</p>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer--moreInfo--form">
            <h2>Send Me a Message</h2>
            <div className="footer--moreInfo--form--name">
              <div className="footer--moreInfo--form--userName">
                <label>Name*</label> <br />
                <input type="text" placeholder="Name" importent />
              </div>
              <div className="footer--moreInfo--form--email">
                <label>Email*</label> <br />
                <input type="text" placeholder="hello@gmail.com" />
              </div>
            </div>
            <div className="footer--moreInfo--form--sub">
              <label>Subject*</label> <br />
              <input type="text" placeholder="Topic..." />
            </div>
            <div className="footer--moreInfo--form--message">
              <label>Message*</label> <br />
              <textarea
                type="text"
                placeholder="Message..."
                rows="4"
                cols="68"
              />
            </div>
            <Button
              endIcon={<ArrowRightAltIcon />}
              className="footer--moreInfo--form--btn"
              onClick={() => {
                alert("This is only frontend(ui). Please contact on social media.");
              }}
            >
              Send a Message
            </Button>
          </div>
        </div>
        
        <p
          style={{
            marginTop: "4rem",
            paddingBottom: "1rem",
            color: "gray",
            textAlign: "center",
          }}
        >
          This portfolio made from scratch by
          <span style={{ color: "#db9a64" }}> Dolly</span> | No ©copyright
          issues |Anyone can use this for their projects.{" "}
          <a
            style={{ color: "#db9a64" }}
            href="https://github.com/hcmay2021-Dolly/my--portfolio--project-5"
            rel="noreferrer"
            target="_blank"
          >
            Project source code.
          </a>
          
        </p>
        
      </div>
      {/* <Link to="/"  className="cercle fixed-bottom">
     <KeyboardArrowUpOutlinedIcon /></Link> */}
    <ScrollButton />

    </>
  );
};

export default Footer;


const socialMedia = [
  {
    icon: <LocationOnOutlinedIcon className="footer--connect--social--Icon" />,
    type: "Address",
    add: "HSR Layout ",
    add2: "Bangalore, 560099",
  },
  {
    icon: <PhoneInTalkOutlinedIcon className="footer--connect--social--Icon" />,
    type: "Phone",
    add: "+91 6300-810-401",
  },
  {
    icon: <MailOutlinedIcon className="footer--connect--social--Icon" />,
    type: "Email",
    add: "heydollysingh@gmail.com",
  },
  {
    icon: <ChatOutlinedIcon className="footer--connect--social--Icon" />,
    type: "Social media chat",
    add: "@CodeWithDolly",
  },
];

const SocialIcon = [
  {
    name: "Facebook",
    icon: <i class="fab fa-facebook-f "></i>,
    link: "https://www.facebook.com/codewithdolly/",
  },
  {
    name: "Instagram",
    icon: <i class="fab fa-instagram"></i>,
    link: "https://www.instagram.com/codewithdolly/",
  },
  {
    name: "LinkedIn",
    icon: <i class="fab fa-linkedin-in"></i>,
    link: "https://www.linkedin.com/in/codewithdolly/",
  },
  {
    name: "Twitter",
    icon: <i class="fab fa-twitter"></i>,
    link: "https://twitter.com/CodeWithDolly/",
  },
  {
    name: "YouTube",
    icon: <i class="fab fa-youtube"></i>,
    link: "https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA",
  },
  {
    name: "Skype",
    icon: <i class="fab fa-skype"></i>,
    link: "#",
  },
];
