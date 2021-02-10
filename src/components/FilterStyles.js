import { useState } from "react";
import PropTypes from "prop-types";
import "./FilterStyles.css";

const styles = [
  { name: "All", value: "all" },
  { name: "Lifestyle", value: "lifestyle" },
  { name: "Kids", value: "kids" },
  { name: "Casual", value: "casual" },
  { name: "Sport", value: "sport" },
  { name: "Men", value: "men" },
];

const FilterStyles = ({ updateParent = () => {} }) => {
  const [styleFilter, setStyleFilter] = useState("all");

  const updateFilter = (style) => {
    const whereFilter = {
      field: "tags",
      comparison: "==",
      value: style,
    };

    setStyleFilter(style);
    updateParent(style === "all" ? [] : [whereFilter]);
  };

  return (
    <section className="styles filter">
      <ul className="style-filter-items">
        {styles.map(({ name, value }, index) => {
          return (
            <li
              key={index + value}
              className={`style-filter-item ${
                styleFilter === value && "active"
              }`}
              onClick={() => {
                updateFilter(value);
              }}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

FilterStyles.propTypes = {
  updateParent: PropTypes.func.isRequired,
};

export default FilterStyles;
