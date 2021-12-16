import * as React from 'react';
import "./MultipleVideo.scss"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/youtube.jpg",
    label: 'YouTube Design from scratch using HTML, CSS, JavaScript',
    youtubeLink: "https://www.youtube.com/watch?v=MFV4WSxAnjs&t=30s",
  },
  
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/mintra.jpg",
    label: 'Myntra Project cloned with React',
    youtubeLink: "https://www.youtube.com/watch?v=ege7EYue2RE&t=3s",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/cowin.jpg",
    label: 'CoWIN Project cloned with React, and MUI (Material-ui)',
    youtubeLink: "https://www.youtube.com/watch?v=Y6z2GuEu1f0&t=25s",
  },
  {
    imgPath: "process.env.PUBLIC_URL +../../Images/gaana.jpg",
    label: 'Gaana Project cloned with HTML, CSS & BootsTrap',
    youtubeLink: "https://www.youtube.com/watch?v=qxvtOmXSHCc",
  },

  {
    imgPath: "process.env.PUBLIC_URL +../../Images/static.jpg",
    label: 'Static Website created from scratch using HTML, CSS, BootsTrap',
    youtubeLink: "https://www.youtube.com/watch?v=tQ1dn55q8jA&t=262s",
  },
  
];

const MultipleVideo= ()=> {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
    <div className='multipleVideo' >
    <h2 >My Projects</h2>
    <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p></div>
    <Box sx={{ maxWidth: 600, flexGrow: 1, margin:"auto" }} >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <a href={step.youtubeLink}>
              <Box
              className='multipleVideo--imgName'
                component="img"
                sx={{
                  height: 350,
                  display: 'block',
                  maxWidth: 600,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              /></a>
              
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    <div className='empty'></div>
    </>
  );
}

export default MultipleVideo;
