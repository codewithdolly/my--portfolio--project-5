import { Button } from "@material-ui/core";
import React from "react";
import "./HomeInfo.scss";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import HomeService from "./HomeService";

const HomeInfo = () => {
  return (
    <>
      <div className="homeInfo">
          <h2 className="homeInfo--information">
            Hello I’m Dolly, a Softwere engineer in Hyderabad, India. She loves
            Technology & likes to develop new tech things, She knows I also
            enjoy cooking.
          </h2>
        <div className="homeInfo--info">
          <div className="homeInfo--info1">
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
              className="homeInfo--btn"
              href="https://www.canva.com/design/DAEY8Pnsb70/Gk7V8fwb5AFxZJ48UUanYQ/view"
              target="_blank"
              endIcon={<SaveAltIcon />}
            >
              Download CV
            </Button>
          </div>

          <div className="homeInfo--info2">
            <div className="homeInfo--info2--marks">
              <div className="homeInfo--info2--marks--mark">
                <p>HTML</p>
                <p>85%</p>
              </div>
              <div className="homeInfo--info2--HTML">
                <div className="homeInfo--info2--rating--inner "></div>
              </div>
            </div>

            <div className="homeInfo--info2--marks">
              <div className="homeInfo--info2--marks--mark">
                <p>CSS</p>
                <p>80%</p>
              </div>
              <div className="homeInfo--info2--CSS">
                <div className="homeInfo--info2--rating--inner "></div>
              </div>
            </div>
           
            <div className="homeInfo--info2--marks">
              <div className="homeInfo--info2--marks--mark">
                <p>Bootstrap</p>
                <p>75%</p>
              </div>
              <div className="homeInfo--info2--bootstrap ">
                <div className="homeInfo--info2--rating--inner "></div>
              </div>
            </div>

            <div className="homeInfo--info2--marks">
              <div className="homeInfo--info2--marks--mark">
                <p>JavaScript</p>
                <p>65%</p>
              </div>
              <div className="homeInfo--info2--javascript">
                <div className="homeInfo--info2--rating--inner "></div>
              </div>
            </div>

           <div className="homeInfo--info2--marks">
              <div className="homeInfo--info2--marks--mark">
                <p>Sass</p>
                <p>75%</p>
              </div>
              <div className="homeInfo--info2--sass">
                <div className="homeInfo--info2--rating--inner"></div>
              </div>
            </div>

            
            <div className="homeInfo--info2--marks">
              <div className="homeInfo--info2--marks--mark">
                <p>MUI(material-ui)</p>
                <p>65%</p>
              </div>
              <div className="homeInfo--info2--mui">
                <div className="homeInfo--info2--rating--inner"></div>
              </div>
            </div>

            <div className="homeInfo--info2--marks">
              <div className="homeInfo--info2--marks--mark">
                <p>React</p>
                <p>60%</p>
              </div>
              <div className="homeInfo--info2--react">
                <div className="homeInfo--info2--rating--inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeService />
    </>
  );
};

export default HomeInfo;
