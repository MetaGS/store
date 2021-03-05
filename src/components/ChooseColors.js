import { useState } from "react";
import PropTypes from "prop-types";
import "./ChooseColors.css";

const FilterColors = ({
  colors = [" #BB3737", " #B6A935", "#1AC25D", "#5f0de4"],
  updateParent,
  error,
  ...props
}) => {
  const [activeColor, setActiveColor] = useState({});
  const [errorClass, setErrorClass] = useState("");

  const clickOnColor = (index) => {
    setActiveColor(index);
    updateParent(colors[index]);
  };

  return (
    <ul className={`color-product-list ${!!error ? "color-error" : ""}`}>
      {colors.map((color, index) => {
        return (
          <li
            key={color}
            className={`color ${activeColor === index && "active"}`}
            style={{
              backgroundColor: color,
            }}
            onClick={() => {
              clickOnColor(index);
            }}
          >
            color
          </li>
        );
      })}
    </ul>
  );
};

FilterColors.propTypes = {
  updateParent: PropTypes.func.isRequired,
};

export default FilterColors;
