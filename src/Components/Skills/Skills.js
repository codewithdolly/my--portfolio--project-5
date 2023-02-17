import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import Footer from "../Footer";
import HomeInfo from "../Home/HomeInfo";
import InspringQuotes from "../InspringQuotes/InspringQuotes";
import Achivements from "../Achivements/Achivements";
import Knowledge from "./Knowledge";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skills--main">
          <motion.h1 
           initial={{ opacity: 0, x:-100 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ duration: .5 }}
          className="skills--main--name">Skills & Knowledge</motion.h1>
        </div>
        
       <div className="skills--info">
       <HomeInfo />
       </div>
       <Knowledge />
       <Achivements />
       <InspringQuotes />
      </div>
      <Footer />
    </>
  );
};

export default Skills;
