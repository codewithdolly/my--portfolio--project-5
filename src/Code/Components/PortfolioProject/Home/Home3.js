import React from "react";
import "./Home3.scss";
import Footer from "../../Footer/Footer";
import InspringQuotes from "../InspringQuotes/InspringQuotes";


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

const Home3 = () => {
  return (
    <>
      <div className="home3">
        <h2 className="home3--service">My Services</h2>

        {services.map((service) => (
          <>
            <div className="home3--cards">
              <img src={service.image} alt="" width="100px" />
              <h2 className="home3--cards--header">{service.header}</h2>
              <p>{service.about}</p>
            </div>
          </>
        ))}
      </div>
      <InspringQuotes />
      <Footer />
    </>
  );
};

export default Home3;
