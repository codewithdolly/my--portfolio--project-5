import { Button } from "@material-ui/core";
import React from "react";
import "./Home2.scss";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Home3 from "./Home3";

const Home2 = () => {
  return (
    <>
      <div className="home2">
        <h2 className="home2--information">
          I’m a Softwere engineer in Hyderabad, India, who loves Technology &
          she likes to develop websites, doing SEO. I also enjoy cooking
        </h2>
        <div className="home2--info">
          <div className="home2--info1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium commodi earum! Quaerat, architecto a, quasi deserunt
              sapiente provident optio ducimus tempora sunt aperiam iusto minima
              maiores libero ad facere. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Numquam dolorem quis soluta laboriosam incidunt?
              Facere doloribus reprehenderit ex dolor provident.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              molestiae nesciunt aspernatur ad veniam cupiditate dolorem
              praesentium voluptatibus consequuntur id nisi, quia adipisci
              eveniet beatae non, provident, qui eligendi. Eius?
            </p>

            <Button
              variant="outlined"
              size="large"
              className="home2--btn"
              href="http://localhost:3000/projects"
              endIcon={<SaveAltIcon />}
            >
              Download CV
            </Button>
          </div>
          <div className="home2--info2">
            <div className="home2--info2--marks html">
              <p style={{ paddingRight: "21.7rem" }}>HTML</p>
              <p>90%</p>
            </div>
            <div className="home2--info2--rating">
              <div className="home2--info2--rating--inner"></div>
            </div>

            <div className="home2--info2--marks css">
              <p style={{ paddingRight: "22.5rem" }}>CSS</p>
              <p>85%</p>
            </div>
            <div className="home2--info2--rating">
              <div className="home2--info2--rating--inner2"></div>
            </div>

            <div className="home2--info2--marks boots">
              <p style={{ paddingRight: "20rem" }}>Bootstrap</p>
              <p>75%</p>
            </div>
            <div className="home2--info2--rating">
              <div className="home2--info2--rating--inner"></div>
            </div>

            <div className="home2--info2--marks javaScript">
              <p style={{ paddingRight: "20rem" }}>JavaScript</p>
              <p>70%</p>
            </div>
            <div className="home2--info2--rating">
              <div className="home2--info2--rating--inner"></div>
            </div>

            <div className="home2--info2--marks mui">
              <p style={{ paddingRight: "20.5rem" }}>material-ui(mui)</p>
              <p>70%</p>
            </div>
            <div className="home2--info2--rating ">
              <div className="home2--info2--rating--inner"></div>
            </div>

            <div className="home2--info2--marks">
              <p style={{ paddingRight: "22rem" }}>React</p>
              <p>50%</p>
            </div>
            <div className="home2--info2--rating">
              <div className="home2--info2--rating--inner"></div>
            </div>
          </div>
        </div>
      </div>
      <Home3 />
    </>
  );
};

export default Home2;
