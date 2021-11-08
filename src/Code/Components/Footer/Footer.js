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
        <div className="">
        <span class="fab fa-youtube"></span>
            <span class="fab fa-facebook-square"></span>
            <span class="fab fa-linkedin"></span>
            <span class="fab fa-whatsapp-square"></span>

        </div>
        <center>
          <p style={{ marginTop: "4rem", color: "gray" }}>
            Copyright ©2021 All rights reserved | This template is Clone by
            <span style={{ color: "#db9a64" }}> Dolly</span>
            <DoneAllOutlinedIcon />
          </p>
        </center>
      </div>
    </>
  );
};

export default Footer;
