import React from "react";
import "./Home.scss";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DollyHome from "../Images/dolly2.png";
import Plane from "../Images/plane.gif";
import HomeInfo from "./HomeInfo";
import HomeService from "./HomeService";
import QualificationAndExperience from "./QualificationAndExperience";
import UseFullTools from "./UseFullTools";
import FactsAndStats from "./FactsAndStats";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="main">
      <img src={Plane} alt="" className="main--plane" />
      <div className="main--body">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 5, fontSize: "50" }}
          transition={{ duration: 1 }}
        >
          <h1 className="main--body--name">
            <span>Hello There,</span> I am Dolly
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
          <Link to="/projects" className="myproject">
            <Button
              size="large"
              className="main--body--btn"
              endIcon={<ArrowRightAltIcon />}
            >
              My Projects
            </Button>
            </Link>
          </motion.div>
        </motion.div>
        <div>
          <img className="main--body--img" src={DollyHome} alt="Dolly" />
        </div>
      </div>

      <HomeInfo />
      <HomeService />
      <UseFullTools />
      <QualificationAndExperience />
      <FactsAndStats />
      <Footer />
    </div>
  );
};

export default Home;
