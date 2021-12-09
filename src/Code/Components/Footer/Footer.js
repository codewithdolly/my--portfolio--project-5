import React from "react";
import "./Footer.scss";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import { Button } from "@material-ui/core";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const socialMedia = [
  {
    icon: <LocationOnOutlinedIcon className="footer--connect--social--Icon" />,
    type: "Address",
    add: "Banjara Hills ",
    add2: "Hyderabad, 500045",
  },
  {
    icon: <PhoneInTalkOutlinedIcon className="footer--connect--social--Icon" />,
    type: "Phone",
    add: "+91 6300-810-401",
    add2: "+91 8328-082-526",
  },
  {
    icon: <MailOutlinedIcon className="footer--connect--social--Icon" />,
    type: "Email",
    add: "heydollysingh@gmail.com",
    add2: "intensedolly321@gmail.com",
  },
  {
    icon: <ChatOutlinedIcon className="footer--connect--social--Icon" />,
    type: "LinkedIn Chat",
    add: "@CodeWithDolly",
  },
];

const Footer = () => {
  return (
    <>
      <div className="footer">
        <center>
          {" "}
          <Button
            href="https://www.linkedin.com/in/codewithdolly/"
            target="_blank"
            variant="outlined"
            className="footer--btn"
          >
            Get in Touch
          </Button>
        </center>
        <div className="footer--connect">
          {socialMedia.map((social) => {
            return (
              <div className="footer--connect--social">
                <div>{social.icon}</div>
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
           <div className="footer--moreInfo--SocialIcons--social--icon"> <FacebookOutlinedIcon sx={{ mr: 2 }} />
                <p>FaceBook</p></div>
               
            </div>
          </div>

          <div className="footer--moreInfo--form">
            <h2>Send Me a Message</h2>
          </div>
        </div>

        <center>
          <p style={{ marginTop: "4rem", color: "gray" }}>
            No ©copyright issues | This portfolio is made by
            <span style={{ color: "#db9a64" }}> Dolly</span>
            <DoneAllOutlinedIcon />
          </p>
        </center>
      </div>
    </>
  );
};

export default Footer;
