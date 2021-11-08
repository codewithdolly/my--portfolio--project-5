import { Button } from "@material-ui/core";
import React from "react";
import "./Home.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  redirect,
  Navigate,
  UseLocation,
} from "react-router-dom";
import Home2 from "./Home2";

const Home = () => {
  return (
    <div className="main">
      <div className="main--body">
        <div>
          <h1 className="main--body--name1">
            Hi There, I Am Jony <br />
            <span className="main--body--name2">Softwere Developeer</span>
          </h1>
          <Button
            href="http://localhost:3000/work"
            variant="outlined"
            size="large"
            className="main--body--btn"
          >
            View Works
          </Button>
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/jony/img/about/xmy_img.png.pagespeed.ic.aEQUG6gU0_.webp"
            alt=""
          />
        </div>
      </div>
      <Home2 />
    </div>
  );
};

export default Home;
