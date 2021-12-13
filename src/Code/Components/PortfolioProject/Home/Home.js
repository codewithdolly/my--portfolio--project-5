import React from "react";
import "./Home.scss";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HomeInfo from "./HomeInfo";
import DollyHome from "../../Images/dolly2.png";
import Plane from "../../Images/plane.gif";
import HomeService from "./HomeService";
import Footer from "../../Footer/Footer";
import InspringQuotes from "../InspringQuotes/InspringQuotes";
import QualificationAndExperience from "./QualificationAndExperience";
import UseFullTools from "./UseFullTools";

const Home = () => {
  return (
    <div className="main">
          <img src={Plane} alt="" className="main--plane"/>
      <div className="main--body">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 5, fontSize: "50" }}
          transition={{ duration: 1 }}
        >
          <h1 className="main--body--name">
            <span>Hello There!</span> I am Dolly
          </h1>
          <div className="main--body--degi">
          <p className="main--body--work">A Web Developer.</p>
          </div>
          {/* <marquee direction="up" scrollamount="5" className="main--body--degi">
            <p className="main--body--work">A Web Developer.</p>
            <p className="main--body--work">A Youtuber.</p>
            <p className="main--body--work">A Digital Marketer.</p>
            <p className="main--body--work">A SEO Analyst.</p>
            <p className="main--body--work">A Proud Indian.</p>
          </marquee> */}

          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: "1", type: "spring" }}
          >
            <Button
              href="http://localhost:3000/projects"
              size="large"
              className="main--body--btn"
              endIcon={<ArrowRightAltIcon />}
            >
              Let's see my work process
            </Button>
          </motion.div>
        </motion.div>
        <div>
          <img className="main--body--img" src={DollyHome} alt="Dolly" />
        </div>
      </div>

      <HomeInfo />
      
      {/* <HomeInfo />
      <HomeService />
      <UseFullTools />
      <QualificationAndExperience />
      <InspringQuotes />
      <Footer /> */}
    </div>
  );
};

export default Home;
