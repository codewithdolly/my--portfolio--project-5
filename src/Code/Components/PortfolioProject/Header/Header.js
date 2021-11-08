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
import CallIcon from '@mui/icons-material/Call';
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Projects from "../Projects/Projects";

const Header = () => {
  const [value, setValue] = useState(0);

  const changeTab = (event, newValue) => {
    setValue(newValue);
  };
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
            <Link to="/about" className="mainHeader--nav--link">
              About
            </Link>
          </li>
          <li style={{ listStyleType: "none" }}>
            <Link to="/projects" className="mainHeader--nav--link">
              Projects
            </Link>
          </li>
          <li style={{ listStyleType: "none" }}>
            <Link to="/contacts" className="mainHeader--nav--link">
              Contact
            </Link>
          </li>
        </ul>

        <Button
          variant="outlined"
          size="large"
          className="mainHeader--ConnectBtn"
         startIcon={<CallIcon />}
         href="tel: 6300810401">
          Let's Connect
          
        </Button>
      </div>
      <Routes element={<Header />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Skills" element={<Skills />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default Header;
