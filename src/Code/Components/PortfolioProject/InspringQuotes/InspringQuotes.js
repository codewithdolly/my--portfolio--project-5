import React, { useState } from "react";
import "./InspringQuotes.scss";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: " Steve Jobs",
    imgPath:"process.env.PUBLIC_URL +../../Images/steve-jobs.jpg",
    quotes:
      "Because the people who are crazy enough to think they can change the world are the ones who do.",
  },
  {
    label: "Bill Gates",
    imgPath:"process.env.PUBLIC_URL +../../Images/bill-gates.jpg",
    quotes:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
  },
  {
    label: "Larry Page",
    imgPath:"process.env.PUBLIC_URL +../../Images/larry-page.jpg",
    quotes:
      "If you're changing the world, you're working on important things. You're excited to get up in the morning.",
  },

  {
    label: "Winston S. Churchill",
    imgPath:"process.env.PUBLIC_URL +../../Images/Winston.jpg",
    quotes:
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  },

  {
    label: "Jim Rohn",
    imgPath:"process.env.PUBLIC_URL +../../Images/Jim.jpg",
    quotes:
    "If you are not willing to risk the usual, you will have to settle for the ordinary.",
  },

  {
    label: "Colin Powell",
    imgPath:"process.env.PUBLIC_URL +../../Images/Colin.jpg",
    quotes:
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
  },
  
  
];

function InspringQuotes() {
  const theme = useTheme();
  const [quote, setquote] = useState(0);
  const maxSteps = images.length;

  const quoteNext = () => {
    setquote((prevquote) => prevquote + 1);
  };

  const quoteBack = () => {
    setquote((prevquote) => prevquote - 1);
  };

  const quoteStepChange = (step) => {
    setquote(step);
  };

  return (
    <>
      <div className="quotes">
        <p className="quotes--head">Inspiring Quotes.</p>
        {/* <p className="quotes--head--border">~~~~~~~~~~~~~~~~~~~~~~~~~</p> */}
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={quote}
          onChangeIndex={quoteStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(quote - index) <= 2 ? (
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{ borderRadius: "50%" }}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <p className="quotes--lines quotes--line">
          "<i>{images[quote].quotes}"</i>
        </p>
        <p className="quotes--lines quotes--name">
          By <b style={{ color: "#db9a64" }}>&nbsp; {images[quote].label}</b>
        </p>
        <MobileStepper
        sx={{backgroundColor:"#311e25"}}
          steps={maxSteps}
          position="static"
          quote={quote}
          nextButton={
            <Button
              className="quotes--btn"
              size="small"
              onClick={quoteNext}
              disabled={quote === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              className="quotes--btn"
              size="small"
              onClick={quoteBack}
              disabled={quote === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    </>
  );
}

export default InspringQuotes;
