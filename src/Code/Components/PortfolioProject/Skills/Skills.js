import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import Footer from "../../Footer/Footer";
import skillImg from "../../Images/skills.jpg";

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
        
        <div className="skills--main--img">
        <img src={skillImg} alt="" width="100%"/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
