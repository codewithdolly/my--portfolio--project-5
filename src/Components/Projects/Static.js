import React from "react";
import "./SingleProject.scss";
import StaticImg from "../Images/static.jpg";
import { Button } from "@material-ui/core";
import Footer from "../Footer";

const Static = () => {
  return (
    <>
      <div className="projects">
        <div className="projects--img">
          <p className="projects--img--header">Static Website Project</p>
        </div>
        <div className="projects--details">
          <img
            src={StaticImg}
            alt="Static page"
            width="920px"
            height="auto"
            className="projects--details--images"
          />
          <div className="projects--details--info">
            <h2>Overview</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              blanditiis hic qui dolor beatae dolores voluptatibus suscipit amet
              velit vel! Voluptas inventore cumque, Facilis blanditiis hic qui
              dolor beatae dolores voluptatibus suscipit amet velit vel!
              Voluptas inventore cumque, architecto accusantium pariatur velit
              dolores. Animi, laboriosam!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              blanditiis hic qui dolor beatae dolores voluptatibus suscipit amet
              velit vel! Voluptas inventore cumque, architecto accusantium
              pariatur velit dolores. Animi, laboriosam!
            </p>
          </div>
          <div className="projects--details--info">
            <h2>Problem</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              blanditiis hic qui dolor beatae dolores voluptatibus suscipit amet
              velit vel! Voluptas inventore cumque, suscipit amet velit vel!
              Voluptas inventore cumque, architecto accusantium pariatur velit
              dolores. Animi, laboriosam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              impedit ratione magni quis sit, nemo facere accusantium sed? Fuga,
              ex quia sequi libero tempore minus!
            </p>
          </div>

          <div className="projects--details--info">
            <h2>Solution</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              blanditiis hic qui dolor beatae dolores voluptatibus suscipit amet
              velit vel! Voluptas inventore cumque, Facilis blanditiis hic qui
              dolor beatae dolores voluptatibus suscipit amet velit vel!
              Voluptas inventore cumque, architecto accusantium pariatur velit
              dolores. Animi, laboriosam!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              blanditiis hic qui dolor beatae dolores voluptatibus suscipit amet
              velit vel! Voluptas inventore cumque, architecto accusantium
              pariatur velit dolores. Animi, laboriosam!
            </p>
            <Button
            href="https://github.com/hcmay2021-Dolly/static-website_first-project"
              className="projects--details--info--btn"
              variant="outlined"
              fullWidth
            >
              Project Link
            </Button>
            <Button
            href="https://www.youtube.com/watch?v=tQ1dn55q8jA&t=262s"
              className="projects--details--info--btn2"
              variant="contained"
              fullWidth
            >
              Project Video
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Static;
