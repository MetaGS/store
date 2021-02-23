import React, { useState } from "react";
import PropTypes from "prop-types";

import UtilsBlock from "../components/UtilsBlock";
import Container from "../components/Container";
import HowToSteps from "../components/HowToSteps";
import "./HowToOrder.css";
import steps from "../data/forHowToOrder";

const HowToOrder = (props) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="how-to-order">
      <Container>
        <UtilsBlock className="how-to-utils" />
        <HowToSteps
          steps={steps}
          activeStep={activeStep}
          stepChange={setActiveStep}
        >
          {steps.map(({ stepBody }) => stepBody)}
        </HowToSteps>
      </Container>
    </div>
  );
};

HowToOrder.propTypes = {};

export default HowToOrder;
