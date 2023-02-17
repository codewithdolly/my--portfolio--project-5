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
import BlogWebsite from "./Components/Projects/BlogWebsite";


let menubar = [{name:"Home",
path:"/home"}, {
  name:"Skills",
  path:"/skills",
} ,{
  name:"YouTube",
  path:"/youtube",
},{
  name:"Projects",
  path:"/projects"
},{
  name: "About me",
  path:"about"
}];

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
          {menubar.map((navbar) => (
            <MenuItem id="item" onClick={closeMenu}>
            <Link underline="hover" to={navbar.path} style={{textDecoration:"none", color:"black"}}>
            {navbar.name}
            </Link>
         
            </MenuItem>
          ))}
        </Menu>
      </div>
      <Routes element={<App />}>
         <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
          
         {SingleProject.map((project)=>{
              return (<>
                <Route path={project.name} element={project.element} />
              </>)
            })}
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
    name:"/projects/static",
    element: <Static />
  },
  {
    name:"/projects/youtube",
    element: <YouTubeProject />
  },
  {
    name:"/projects/gaana",
    element: <Gaana />
  },
  {
    name:"/projects/cowin",
    element: <CoWin />
  },
  {
    name:"/projects/google-form",
    element: <GoogleForm />
  },
  {
    name:"/projects/myntra",
    element: <Myntra />
  },
  {
    name:"/projects/whatsapp-web",
    element: <WhatsApp />
  }, {
    name:"slack",
    element: <Slack />
  }, {
    name:"/projects/instagram",
    element: <Instagram />
  }, {
    name:"/projects/stack-overflow",
    element: <StackOverFlow />
  }, {
    name:"/projects/ecommerce",
    element: <Ecommerce />
  }, 
  {
    name:"/projects/slack",
    element: <Slack />
  },
  {
    name:"/projects/blog",
    element: <BlogWebsite />
  }, {
    name:"/projects/big-bang-best",
    element: <BigBangBest />
  }, {
    name:"/projects/tic-tack-toe",
    element: <TickTackToe />
  }

]
