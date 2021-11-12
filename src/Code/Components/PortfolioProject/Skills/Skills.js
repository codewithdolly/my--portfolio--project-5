import React from "react";
import "./Skills.scss";
import Footer from "../../Footer/Footer";
import skillImg from "../../Images/skills.jpg";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skills--main">
          <h1 className="skills--main--name">Skills & Knowledge</h1>
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
