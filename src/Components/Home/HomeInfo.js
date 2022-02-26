import { Button } from "@material-ui/core";
import React from "react";
import "./HomeInfo.scss";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const HomeInfo = () => {
  return (
    <>
      <div className="homeInfo">
      <h2 className="homeInfo--skills">My Skills</h2>
      <p className="homeInfo--border">~~~~~~~~~~~~~~~~~~~~~~~~</p>
        <h2 className="homeInfo--information">
          Hello I’m Dolly, a Software engineer in Hyderabad, India. She loves
          Technology & likes to develop new Tech things, And also enjoy
          cooking!
        </h2>
        <div className="homeInfo--info">
          <div className="homeInfo--info1">
          <p>
                Hello! I am Dolly Singh, Web developer, Digital marketer and a
                YouTuber. I live in Hyderabad, India. I am Frontend developer
                and I have build some projects on wordpress Elementor.I also
                know basic about SEO. I have Youtube Channel where I upload my
                project's video and many more things.
              </p><br />
              <p className="homeInfo--info1--p2">
                Have a Look at My
                <a
                  href="https://www.youtube.com/channel/UCD4YW5rhsXi-BK2tzbWVIZA"
                  style={{ color: "white" }}
                >
                  {" "}
                  Youtube{" "}
                </a>
                Channel, It will Students/developer to learn thing in easy ways
                and help you to make projects. Or you can connect me on
                Facebook, Linkdin or Instagram. I am always excited to talk
                about Tech.
              </p><br />
<div  className="homeInfo--info--contact--btn">
            <Button
              size="large"
              className="homeInfo--info--contact"
              href="tel: 6300810401"
              endIcon={<ArrowRightAltIcon />}
            >
              Contact me
            </Button>
            <Button
              variant="outlined"
              size="large"
              className="homeInfo--info--CV"
              href="https://www.canva.com/design/DAEoT0cl6mY/XIlQ8gdNusCwWlsIFIBOnA/view?utm_content=DAEoT0cl6mY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
              target="_blank"
              startIcon={<SaveAltIcon />}
            >
              Download CV
            </Button>
            </div>
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
                <div className="homeInfo--info2--rating--inner"></div>
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
    </>
  );
};

export default HomeInfo;
