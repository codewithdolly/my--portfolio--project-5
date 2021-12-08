import React from "react";
import "./HomeService.scss";
import Footer from "../../Footer/Footer";
import InspringQuotes from "../InspringQuotes/InspringQuotes";
import {motion} from "framer-motion"

const services = [
  {
    image: "https://preview.colorlib.com/theme/jony/img/svg_icon/2.svg",
    header: "Web Development",
    about:
      "Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero",
  },
  {
    image: "https://preview.colorlib.com/theme/jony/img/svg_icon/1.svg",
    header: "Web Design",
    about:
      "Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero",
  },

  {
    image: "https://preview.colorlib.com/theme/jony/img/svg_icon/3.svg",
    header: "E-commerce",
    about:
      "Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero",
  },
  {
    image: "https://preview.colorlib.com/theme/jony/img/svg_icon/2.svg",
    header: "SEO",
    about:
      "Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero",
  },
];

const HomeService = () => {
  return (
    <>
      <div className="homeService">
        <motion.h2 
        animate={{x: 0}}
        initial={{x:-300}}
        transition= {{duration: 1}}
        className="homeService--service">My Services</motion.h2>
        <p className="homeService--border">~~~~~~~~~~~~~~~~~~~~~~~~~</p>
        {services.map((service) => (
          <>
            <motion.div
            whileHover={{scale:1.3}}
            transition={{duration:.5}}
             className="homeService--cards">
              <img src={service.image} alt="" />
              <h2 className="homeService--cards--header">{service.header}</h2>
              <p>{service.about}</p>
            </motion.div>
          </>
        ))}
      </div>
      <InspringQuotes />
      <Footer />
    </>
  );
};

export default HomeService;
