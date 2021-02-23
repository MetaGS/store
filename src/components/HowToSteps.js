import React, { useState } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";

import "./HowToSteps.css";
import Button from "./Button";
const HowToSteps = ({ steps, children }) => {
  const [activeStep, setActiveStep] = useState(0);

  const changeActiveStep = (index) => {
    return (e) => {
      e.preventDefault();
      if (index >= 0 && index < steps.length) setActiveStep(index);
    };
  };

  console.log(activeStep === steps.length - 1);

  return (
    <div className="how-to-steps-wrapper">
      <ul className="how-to-steps">
        {steps.map((step, index) => (
          <li className={`how-to-step ${activeStep === index ? "active" : ""}`}>
            <a onClick={changeActiveStep(index)}>{step.stepHeader}</a>
          </li>
        ))}
      </ul>
      <div className="how-to-steps-body">
        <Carousel
          selectedItem={activeStep}
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
        >
          {children.map((userElements, index) => {
            return <div className="how-to-step-body">{userElements}</div>;
          })}
        </Carousel>
        <div className="steps-control-buttons">
          <Button
            hidden={activeStep === 0}
            // style={{opacity: activeStep === 0 ?}}
            text="previous"
            type="sm"
            className="how-to-next"
            onClick={changeActiveStep(activeStep - 1)}
          />
          <Button
            hidden={activeStep === steps.length - 1}
            text="next"
            type="sm"
            className="how-to-control-next"
            onClick={changeActiveStep(activeStep + 1)}
          />
        </div>
      </div>
    </div>
  );
};

HowToSteps.propTypes = {};

export default HowToSteps;
