import { Button } from "@material-ui/core";
import React from "react";
import "./Home.scss";
import HomeInfo from "./HomeInfo";
// import DollyHome from "../../Images/1.png";
import DollyHome from "../../Images/dolly2.png";
import DollyMobile from "../../Images/dolly.jpg";
import { motion } from "framer-motion";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home = () => {
  return (
    <div className="main">
          <img src={DollyMobile} alt="" className="main--body--mobileimg"/>
      <div className="main--body">

        <motion.div
          initial={{ opacity: 0,}}
          animate={{ opacity: 5,fontSize:"50"}}
          transition={{ duration: 1 }}
        >
          <h1 className="main--body--name">
            <span>Hi There,</span> I am Dolly       
          </h1>
          <marquee
          direction="up"
          scrollamount="5"
          className="main--body--degi"
        >
           <p className="main--body--work">A Web Developer.</p>
           <p className="main--body--work">A Youtuber.</p>
           <p className="main--body--work">A Digital Marketer.</p>
           <p className="main--body--work">A SEO  Analyst.</p>
           <p className="main--body--work">A Proud Indian.</p>
        </marquee>
        
          <motion.div
          initial={{x:"-100vw"}}
          animate={{x:0}}
          transition={{duration:"1", type:"spring"}}
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
          <img
            className="main--body--img"
            src={DollyHome}
            alt="Dolly"
          />
        </div>
      </div>
      {/* <HomeInfo /> */}
    </div>
  );
};

export default Home;
