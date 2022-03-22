import React, { useState } from "react";
import "./App.scss";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {Home, Projects, About, Skills, Gaana, YouTube} from "./Components";
import CoWin from "./Components/Projects/CoWin";
import Static from "./Components/Projects/Static";
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
         <Route path="cowin" element={<CoWin/>} />
         <Route path="static" element={<Static />} />
         </Route>
         <Route path="/Skills" element={<Skills />} />
         <Route path="/youtube" element={<YouTube />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
    </Router>
  );
};

export default App;
