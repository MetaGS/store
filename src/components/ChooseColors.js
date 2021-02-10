import { useState } from "react";
import PropTypes from "prop-types";
import "./FilterColors.css";

const FilterColors = ({
  colors = [" #BB3737", " #B6A935", "#1AC25D", "#5f0de4"],
  ...props
}) => {
  let { size = "", style = {} } = props;
  let { marginRight = "" } = style;

  const [colorFilter, setColorFilter] = useState({});

  return (
    <ul className="color-filter-list">
      {colors.map((color) => {
        return (
          <li
            key={color}
            className="color"
            style={{
              backgroundColor: color,
              padding: style.padding ? style.padding : "",
              marginRight: marginRight,
              minHeight: "40px",
              minWidth: "40px",
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
