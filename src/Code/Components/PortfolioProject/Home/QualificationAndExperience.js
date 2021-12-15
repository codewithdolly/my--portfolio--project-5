import React from "react";
import "./QualificationAndExperience.scss";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const QualificationAndExperience = () => {
  return (
    <>
      <div className="qualificationAndExperience">
        <div className="qualificationAndExperience--experience">
            <DoubleArrowIcon sx={{ mx: 1, color: "white" }} />
            <div className="qualificationAndExperience--experience--head" >
              Experience
            </div>
          </div>

          {experience.map((job) => {
            return (
              <>
                <div className="qualificationAndExperience--List">
                  <img src={job.img} alt={job.name} width="300px" height="160px" />
                  <p>{job.disc}</p>
                  <p>{job.role}</p>
                  <p>{job.Place}</p>
                  <p>{job.year}</p>


                </div>
              </>
            );
          })}
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
  },

      // {
      //   img: process.env.PUBLIC_URL + "../Images/stablx.jpg",
      //   name:"STABLX",
      //   year:"June 2020 .",
      //   role:"WordPress Developer",
      //   Place:"Madhapur, Hyderabad",
      //   disc:"I got internship in STABLX as wordpress developer.",

    // },

  //   {
  //     img: process.env.PUBLIC_URL + "../Images/mantrang.jpg",
  //     name:"Mantrang EdTech",
  //     year:"March 2021.",
  //     role:"Freelancer",
  //     Place:"Madhapur, Hyderabad",
  //     disc:"Mantrang is a edtech company. and I have designed this first project as wordpress developer.",

  // },
  //      {
  //        img: process.env.PUBLIC_URL + "../Images/amaySolution.jpg",
  //         name:"Amay Design Solutions.",
  //         year:"April 2021",
  //         status:"- present",
  //         role:"WordPress Developer",
  //         Place:"Maharastra",
  //         disc:"AMAY Design solution is a full-service client market-specific consultancy firm. This is my second project as Wordpress developer.",

  //     },
];
