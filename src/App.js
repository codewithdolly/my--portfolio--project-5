import React, { useState } from "react";
import "./App.scss";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {Home, Projects, About, Skills, YouTube} from "./Components";
import Static from "./Components/Projects/Static";
import CoWin from "./Components/Projects/CoWin";
import Gaana from "./Components/Projects/Gaana"
import GoogleForm from "./Components/Projects/GoogleForm"
import Myntra from "./Components/Projects/Myntra"
import Slack from "./Components/Projects/Slack"
import WhatsApp from "./Components/Projects/WhatsApp"
import YouTubeProject from "./Components/Projects/YouTubeProject"
import Instagram from "./Components/Projects/Instagram"
import BigBangBest from "./Components/Projects/BigBangBest"
import TickTackToe from "./Components/Projects/TickTackToe"
import Ecommerce from "./Components/Projects/Ecommerce"
import StackOverFlow from "./Components/Projects/StackOverFlow"

import { motion } from "framer-motion";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';


let menubar = ["Home", "Skills", "About", "YouTube", "Projects"];

const App = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const OpenMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Router>
      <div className="mainHeader">
      <Link to="/" style={{textDecoration:"none", color:"#db9a64"}}> 
        <motion.h1
          animate={{ y: 0, opacity: 5 }}
          initial={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
        Dolly
        </motion.h1></Link>
        <motion.ul
          className="mainHeader--nav"
          animate={{ y: 0 }}
          initial={{ y: 50 }}
        >
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
        </motion.ul>

        <motion.div animate={{ y: 0 }} initial={{ y: 50 }}>
          <Button
            variant="outlined"
            size="large"
            className="mainHeader--ConnectBtn"
            startIcon={<CodeOutlinedIcon />}
            href="tel: 6300810401"
          >
            Hire me
          </Button>
        </motion.div>

        <MenuIcon className="mainHeader--menu" onClick={OpenMenu} />
        <Menu
          anchorEl={anchorElUser}
          keepMounted
          open={Boolean(anchorElUser)}
          onClose={closeMenu}
        >
          {menubar.map((setting) => (
            <MenuItem id="item" onClick={closeMenu}>
              {setting}
              <Routes>
                <Route path="/projects" element={setting} />
              </Routes>
            </MenuItem>
          ))}
        </Menu>
      </div>
      <Routes element={<App />}>
         <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />}>
            {SingleProject.map((project)=>{
              return (<>
                <Route path={project.name} element={project.element} />
              </>)
            })}
         </Route>
         <Route path="/Skills" element={<Skills />} />
         <Route path="/youtube" element={<YouTube />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
    </Router>
  );
};

export default App;

const SingleProject=[
  {
    name:"static",
    element: <Static />
  },
  {
    name:"youtube",
    element: <YouTubeProject />
  },
  {
    name:"gaana",
    element: <Gaana />
  },
  {
    name:"cowin",
    element: <CoWin />
  },
  {
    name:"google-form",
    element: <GoogleForm />
  },
  {
    name:"myntra",
    element: <Myntra />
  },
  {
    name:"whatsapp-web",
    element: <WhatsApp />
  }, {
    name:"slack",
    element: <Slack />
  }, {
    name:"instagram",
    element: <Instagram />
  }, {
    name:"stack-overflow",
    element: <StackOverFlow />
  }, {
    name:"ecommerce",
    element: <Ecommerce />
  }, {
    name:"big-bang-best",
    element: <BigBangBest />
  }, {
    name:"tic-tack-toe",
    element: <TickTackToe />
  }

]
