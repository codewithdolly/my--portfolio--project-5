import React from "react";
import "./QualificationAndExperience.scss";

const QualificationAndExperience = () => {
  return (
    <>
      <div className="qualificationAndExperience">
      <div className="qualificationAndExperience--experience">
      <h2>Experience </h2>
      <p>~~~~~~~~~~~~~~~</p>
        {/*
          <DoubleArrowIcon sx={{ mx: 1, color: "white" }} />
          <div className="qualificationAndExperience--experience--head">
            Experience
          </div> */}
        </div>
        <div
         
                className="qualificationAndExperience--Lists"
              >
        {experience.map((job) => {
          return (
            <>
                <div className="qualificationAndExperience--Lists--list">
                  <img
                    src={job.img}
                    alt=""
                    width="300px"
                    className="qualificationAndExperience--Lists--list--img"
                  />
                 <div  className="qualificationAndExperience--Lists--list--content">
                 <h2><a href={job.link}>{job.name}</a></h2>
                 <p>{job.disc}</p>
                  <p style={{color:"#db9a64"}}><b>{job.role}</b></p>
                  <p><b>Place:</b> {job.Place}</p>
                  <p><b>Time: </b>{job.year}</p>
                 </div>
                </div>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default QualificationAndExperience;

const experience = [
  {
    img: process.env.PUBLIC_URL + "../Images/hicoder.jpg",
    name: "Hicoder",
    year: "May 2021- present",
    role: "Full Stack Developer",
    Place: "Hitech City, Hyderabad",
    disc: "I am doing full stack development cource from HiCoder.",
    link:"https://hicoder.in/",
  },

  {
    img: process.env.PUBLIC_URL + "../Images/stablx.jpg",
    name: "STABLX",
    year: "June 2020- present",
    role: "WordPress Developer",
    Place: "Madhapur, Hyderabad",
    disc: "I got internship in STABLX as wordpress developer.",
    link:"https://www.stablx.com/",
  },

    {
      img: process.env.PUBLIC_URL + "../Images/mantrang.jpg",
      name:"Mantrang EdTech",
      year:"March 2021.",
      role:"Freelancer",
      Place:"Madhapur, Hyderabad",
      disc:"Mantrang is a edtech company. and I have designed this first experience as wordpress developer.",
      link:"https://mantrangedtech.com/",

  },
       {
         img: process.env.PUBLIC_URL + "../Images/amaySolution.jpg",
          name:"Amay Design Solutions.",
          year:"April 2021",
          role:"Freelancer",
          Place:"Maharastra",
          disc:"Amay Design solution is a full-service client market-specific consultancy firm. This is my second experience as Wordpress developer.",
          link:"https://amaydesignsolutions.com/",
      },
];
