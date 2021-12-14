import React from "react";
import "./QualificationAndExperience.scss";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const QualificationAndExperience = () => {
  return (
    <>
      <div className="qualificationAndExperience">
        <div className="qualificationAndExperience--list">
          <div className="qualificationAndExperience--list--Qualifications">
            <DoubleArrowIcon sx={{ mx: 1, color: "white" }} />
            <div className="qualificationAndExperience--list--Qualifications--Qualification">
              Qualification
            </div>
          </div>
          <div className="qualificationAndExperience--list--Education">
            <h1 className="qualificationAndExperience--list--Education--h1">
              My Education
            </h1>

            {education.map((study) => {
              return (
                <div className="qualificationAndExperience--list--Education--study">
                  <div className="qualificationAndExperience--list--Education--study--year">
                    {study.year}
                  </div>
                  <div className="qualificationAndExperience--list--Education--study--details">
                    <h3>{study.class}</h3>
                    <h2>{study.subject}</h2>
                    <h4>{study.college}</h4>
                    <p>Marks: {study.grad}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="qualificationAndExperience--list2">
          <div className="qualificationAndExperience--list2--Experiences">
            <DoubleArrowIcon sx={{ mx: 1, color: "white" }} />
            <div className="qualificationAndExperience--list2--Experiences--Experience">
            Experience
            </div>
          </div>
          <div className="qualificationAndExperience--list2--experience">
          <h1 className="qualificationAndExperience--list2--experience--h1">
            My Experience
            </h1>

            {experience.map((job) => {
              return (
                <div className="qualificationAndExperience--list2--experience--job">
                  <div className="qualificationAndExperience--list2--experience--job--year">
                    {job.year} <br />{job.status}
                  </div>
                  <div className="qualificationAndExperience--list2--experience--job--details">
                    <h3>{job.role}</h3>
                    <h2>{job.name}</h2>
                    <h4>{job.Place}</h4>
                    <p>{job.disc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
};

export default QualificationAndExperience;

const education = [
  {
    subject: "Biology & Math",
    class: "Intermediate of Science",
    year: "2014-2016",
    college: "Ram Sundar Das Mahila Mahavidyalay",
    grad: " 61.2%",
  },
  {
    subject: "Accounting",
    class: "Bachelor Of Commerce",
    year: "2018-2021",
    college: "Gitam University Visakhapatnam",
    grad: "7.5 CGPA",
  },
];

const experience=[
     {
        name:"Amay Design Solutions.",
        year:"March 2021",
        status:"- present",
        role:"WordPress Developer",
        Place:"Maharastra",
        disc:"Because, I don't love studying, But I Like Learning!!",

    },
    {
        name:"STABLX",
        year:"June 2020 .",
        status:"- present",
        role:"WordPress Developer",
        Place:"Madhapur, Hyderabad",
        disc:"Because, I don't love studying, But I Like Learning!!",

    },
   
]
