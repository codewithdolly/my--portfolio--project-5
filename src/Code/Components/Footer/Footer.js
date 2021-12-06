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
        <p className="footer--AboutMe">Coffee with me.</p>
        <p className="footer--AboutMe--me">
          I am always excited to work on some awesome projects, message me and
          let's discuss over coffee.
        </p>
        <div style={{ textAlign: "center", marginLeft: "80px" }}  className="footer--input">
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
              sx={{color: "#bebbb8ce", fontSize: "3rem" }}
            />
          </IconButton>
        </div>
        <small  className="footer--feedme">
          You can find me here as well
        </small>
        <div className="footer--Icons">
          <a href="https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA">
            <span
              className="fab fa-youtube footer--Icon"
              style={{ color: "red"}}
            ></span>
          </a>
          <a href="https://www.facebook.com/codewithdolly/">
            <span
              className="fab fa-facebook-square footer--Icon"
              style={{
                color: "#3b5998",
              }}
            ></span>
          </a>
          <a href="https://www.instagram.com/codewithdolly">
            <i class="fab fa-instagram instagram "></i>
          </a>
          <a href="https://www.linkedin.com/in/codewithdolly/">
            <span
              className="fab fa-linkedin footer--Icon"
              style={{
                color: "#287bbc"
              }}
            ></span>
          </a>
          <a href="mailto: heydollysingh@gmail.com">
            <span
              className="fas fa-envelope footer--Icon"
              style={{
                color: "#b32d00",
              }}
            ></span>
          </a>
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
