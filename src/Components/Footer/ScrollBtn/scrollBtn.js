import React, { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Button } from "@material-ui/core";
import "./scrollBtn.scss";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button className="scrollBtn">
      <ArrowCircleUpIcon
        onClick={scrollToTop}
        style={{
          color: "white",
          display: visible ? "inline" : "none",
          fontSize: "3rem",
        }}
      />
    </Button>
  );
};

export default ScrollButton;
