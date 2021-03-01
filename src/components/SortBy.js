import "./SortBy.css";

import React, { useState } from "react";
import PropTypes from "prop-types";

const sortBy = [
  { name: "Newest", value: "createdAt" },
  { name: "Discount", value: "discount" },
  { name: "Price", value: "price" },
  { name: "Rating", value: "rating" },
];

const SortBy = ({ setParentSortBy }) => {
  const initialSetup = [null, null, null, null];
  const [sortBySelected, setSortBySelected] = useState(initialSetup);

  const onSortClick = (sortIndexInArray, sortValue) => {
    let updatedSortBy = [];

    if (sortBySelected[sortIndexInArray]?.order === "desc") {
      updatedSortBy = [...initialSetup];
    } else if (sortBySelected[sortIndexInArray]?.order === "asc") {
      updatedSortBy = initialSetup;
      updatedSortBy[sortIndexInArray] = {
        value: sortValue,
        order: "desc",
      };
    } else {
      updatedSortBy = initialSetup;
      updatedSortBy[sortIndexInArray] = { value: sortValue, order: "asc" };
    }
    console.log(updatedSortBy);
    setSortBySelected(updatedSortBy);
    setParentSortBy(updatedSortBy);
  };

  const handleItemClass = (sortIndex) => {
    const sortObjOrder = sortBySelected[sortIndex]?.order;

    if (sortObjOrder === "asc") {
      return "active-asc";
    } else if (sortObjOrder === "desc") {
      return "active-desc";
    } else {
      return null;
    }
  };

  return (
    <section className="sort-block">
      <p>Sort By:</p>
      <ul className="sort-items">
        {sortBy.map((sort, index) => {
          return (
            <li
              className={`sort-item ${handleItemClass(index) && "active"}`}
              key={index}
            >
              <button
                onClick={() => {
                  onSortClick(index, sort.value);
                }}
              >
                <span className={`asc-desc ${handleItemClass(index)}`}></span>{" "}
                {sort.name}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

SortBy.propTypes = {
  setParentFilterArray: PropTypes.func.isRequired,
};

export default SortBy;
