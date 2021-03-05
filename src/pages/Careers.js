import React from "react";
import PropTypes from "prop-types";

import Container from "../components/Container";
import { Utils as UtilsBlock, BackButton } from "../components/UtilsBlock";
import "./Careers.css";
import Header from "../components/Header";
import JobBlock from "../components/JobBlock";

const headerData = {
  intro: "Work with professionals",
  title: "JOIN US",
  subtitle: "clothes selling company",
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum reprehenderit corrupti vel distinctio delectus eligendi aspernatur tenetur cupiditate consequatur, recusandae, non eos provident placeat assumenda?`,
  buttonText: "More ABout us",
};

const colors = {
  stylish: "rgb(49, 105, 192)",
};

const Careers = (props) => {
  return (
    <div className="repayment">
      <div className="repay-top">
        <Container>
          <UtilsBlock className="repay-utils">
            <BackButton type="primary-button">BACK</BackButton>
          </UtilsBlock>
          <Header data={headerData} colors={colors} linkTo="/about" />
        </Container>
      </div>
      <Container>
        <JobBlock />
      </Container>
    </div>
  );
};

Careers.propTypes = {};

export default Careers;
