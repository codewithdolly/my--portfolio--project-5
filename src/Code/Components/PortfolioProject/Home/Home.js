import { Button } from "@material-ui/core";
import React from "react";
import "./Home.scss";
import Home2 from "./Home2";
import DollyHome from "../../Images/1.png"

const Home = () => {
  return (
    <div className="main">
      <div className="main--body">
        <div>
          <h1 className="main--body--name1">
            Hi There, I Am Dolly <br />
            <span className="main--body--name2">Software Developer</span>
          </h1>
          <Button
            href="http://localhost:3000/projects"
            variant="outlined"
            size="large"
            className="main--body--btn"
          >
            View Works
          </Button>
        </div>
        <div>
          <img
          className="main--body--img"
          src={DollyHome}
          height="500"
          // width="400px"
            // src="https://preview.colorlib.com/theme/jony/img/about/xmy_img.png.pagespeed.ic.aEQUG6gU0_.webp"
            alt="Dolly"
          />
        </div>
      </div>
      <Home2 />
    </div>
  );
};

export default Home;
