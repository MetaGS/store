import { useState } from "react";
import PropTypes from "prop-types";
import "./FilterColors.css";

const colors = [
  { value: "#BB3737", whereQuery: {} },
  { value: " #B6A935" },
  { value: "#1AC25D" },
  { value: "#5f0de4" },
];

const FilterColors = ({ updateParent, ...props }) => {
  let { size = "", style = {} } = props;
  let { marginRight = "" } = props;

  const [colorFilter, setColorFilter] = useState("");

  const updateFilter = (value) => {
    let whereQuery = {};
    let newValue = "";

    if (value !== colorFilter) {
      newValue = value;
      whereQuery = {
        field: "color",
        comparison: "==",
        value,
      };
    }
    setColorFilter(newValue);
    updateParent(whereQuery);
  };

  return (
    <ul className="color-filter-list">
      {colors.map(({ value: color }) => {
        return (
          <li
            key={color}
            className={`color ${colorFilter === color && "active"}`}
            onClick={() => {
              updateFilter(color);
            }}
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
