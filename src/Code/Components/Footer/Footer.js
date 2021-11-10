import React from "react";
import "./Footer.scss";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="footer--project1">Coffee with me.</p>
        <p className="footer--project2">
          I am always excited to work on some awesome projects, message me and
          let's discuss over coffee.
        </p>
        <div style={{ textAlign: "center", marginLeft: "80px" }}>
          <TextField
            sx={{ color: "#db9a64" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="Message..."
            variant="filled"
          />
          <IconButton aria-label="send" href="http://localhost:3000/">
            <ArrowForwardIcon
              className="footer--project1--btn-hover"
              sx={{ fontSize: "4rem", color: "#bebbb8ce" }}
            />
          </IconButton>
        </div>
        <small style={{ color: "white", marginTop:"20rem" }}>
          You can connect me here as well
        </small>
        <div style={{ fontSize: "60px" }}>
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
          <a href="https://twitter.com/intensedolly">
            <span
              class="fab fa-twitter-square"
              style={{ color: "#33adff", paddingRight: "10px" }}
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
        <center>
          <p style={{ marginTop: "4rem", color: "gray" }}>
            Copyright ©2021 All rights reserved | This template is Cloned by
            <span style={{ color: "#db9a64" }}> Dolly</span>
            <DoneAllOutlinedIcon />
          </p>
        </center>
      </div>
    </>
  );
};

export default Footer;
