import React, { useState } from "react";
import "./Header.scss";
import { Tabs, Tab, Button } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  redirect,
  Navigate,
  UseLocation,
} from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import About from "../About/About";
import YouTube from "../YouTube/YouTube";
import Cowin from "../Projects/CoWin"
import Projects from "../Projects/Projects";

const Header = () => {
  return (
    <Router>
      <div className="mainHeader">
        <h1>Dolly.</h1>
        <ul className="mainHeader--nav">
          <li style={{ listStyleType: "none" }} active>
            <Link to="/" className="mainHeader--nav--link active">
              Home
            </Link>
          </li>
          <li style={{ listStyleType: "none" }}>
            <Link to="/skills" className="mainHeader--nav--link">
              Skills
            </Link>
          </li>

          <li style={{ listStyleType: "none" }}>
            <Link to="/projects" className="mainHeader--nav--link">
              Projects
            </Link>
          </li>
          <li style={{ listStyleType: "none" }}>
            <Link to="/youtube" className="mainHeader--nav--link">
              YouTube
            </Link>
          </li>

          <li style={{ listStyleType: "none" }}>
            <Link to="/about" className="mainHeader--nav--link">
              About me
            </Link>
          </li>
        </ul>

        <Button
          variant="outlined"
          size="large"
          className="mainHeader--ConnectBtn"
          startIcon={<CallIcon />}
          href="tel: 6300810401"
        >
          Let's Connect
        </Button>
      </div>
      <Routes element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} >
        {/* <Route path="cowin" element={<Cowin />} > */}
        </Route>
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default Header;
