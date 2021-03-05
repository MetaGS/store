import React, { useState } from "react";
import PropTypes from "prop-types";
import SizesComponent from "./SizesComponent";

import "./ChooseSizes.css";
const ChooseSizes = ({ sizes, updateParent, error }) => {
  const [activeSize, setActiveSize] = useState(null);

  const onChooseSize = (index) => {
    setActiveSize(index);
    updateParent(sizes[index]);
  };

  return (
    <>
      <div className="sizes-subblock">
        <span className="sizes-title">sizes</span>
        <span className="sizes-guide">
          <a href="#">Size guide</a>
        </span>
      </div>
      <div className={`sizes-self ${error ? "sizes-error" : ""}`}>
        {
          <>
            <div className="row">
              {sizes.map((size, index) => {
                return (
                  <SizesComponent
                    key={index}
                    size={size}
                    active={activeSize === index}
                    onClick={(e) => {
                      onChooseSize(index);
                    }}
                  />
                );
              })}
            </div>
            <div className="row"></div>
          </>
        }
      </div>
    </>
  );
};

ChooseSizes.propTypes = {};

export default ChooseSizes;
