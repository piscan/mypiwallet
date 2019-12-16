import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
});

export default function Stepper(props) {

 const classes = useStyles();
  const theme = useTheme();
  

  return (
    <MobileStepper
      variant="dots"
      steps={props.steps}
      position="relative"
      activeStep={props.activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={props.onNextClick} disabled={props.activeStep === props.steps-1 || !props.status} >
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={props.onBackClick} disabled={props.activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}
