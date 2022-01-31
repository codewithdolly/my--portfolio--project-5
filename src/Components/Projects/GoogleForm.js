import React from "react";
import "./SingleProject.scss";
import GoogleFormImg from "../Images/6.jpg";
import { Button } from "@material-ui/core";
import Footer from "../Footer";

const GoogleForm = () => {
  return (
    <>
      <div className="projects">
        <div className="projects--img">
          <p className="projects--img--header">GoogleForm Website Project</p>
        </div>
        <div className="projects--details">
          <img
            src={GoogleFormImg}
            alt="GoogleForm page"
            width="850px"
            height="500"
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
            href="https://github.com/hcmay2021-Dolly/react--GoogleForm--Project"
              className="projects--details--info--btn"
              variant="outlined"
              fullWidth
            >
              Project Link
            </Button>
            <Button
            href="https://www.youtube.com/watch?v=U3ZXQkdx1pY&t=179s"
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

export default GoogleForm;
