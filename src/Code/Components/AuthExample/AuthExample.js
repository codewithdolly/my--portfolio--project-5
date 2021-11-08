import React from "react";
import { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  redirect,
  Navigate,
  UseLocation,
} from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProvideAuth from "./ProvideAuth";
import Resume from "../PortfolioProject/Resume"
import Portfolio from "../PortfolioProject/Portfolio";
// import AuthButton from "./AuthButton";

const AuthExample = () => {
  const [value, setValue] = useState(0);

  const changeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ProvideAuth>
      <Router>
        {/* <AuthButton /> */}
        <Tabs
          value={value}
          onChange={changeTab}
          aria-label="secondary tabs example"
        >
          <Tab to="/resume" value={0} label="Resume" />
          <Tab to="/portfolio" value={1} label="Portfolio" />
        </Tabs>

        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </ProvideAuth>
  );
};

export default AuthExample;
