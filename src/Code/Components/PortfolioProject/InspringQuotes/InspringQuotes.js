import React, { useState } from "react";
import "./InspringQuotes.scss";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { padding } from "@mui/system";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: " Steve Jobs",
    imgPath: "https://akshaysaini.in/img/quotes/steve-jobs.jpg",
    quotes:
      " Success is a lousy teacher. It seduces smart people into thinking they can't lose. ",
  },
  {
    label: "Bill Gates",
    imgPath: "https://akshaysaini.in/img/quotes/bill-gates.jpg",
    quotes:
      " Success is a lousy teacher. It seduces smart people into thinking they can't lose. ",
  },
  {
    label: "Linus Torvalds",
    imgPath: "https://akshaysaini.in/img/quotes/larry-page.jpg",
    quotes:
      " Success is a lousy teacher. It seduces smart people into thinking they can't lose. ",
  },
  {
    label: " Larry Page",
    imgPath: "https://akshaysaini.in/img/quotes/linus-torvalds.jpg",
    quotes:
      " Success is a lousy teacher. It seduces smart people into thinking they can't lose. ",
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
        <p className="quotes--lines">
          "<i>{images[quote].quotes}"</i>
        </p>
        <p className="quotes--lines">
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
