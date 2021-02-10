import { useState } from "react";
import PropTypes from "prop-types";
import "./FilterPrices.css";

const prices = [
  {
    name: "$0 - $50",
    id: "$0 - $50",
    whereQuery: [
      {
        comparison: "<=",
        value: 50,
        field: "price",
      },
    ],
  },
  {
    name: "$50 - $100",
    id: "$50 - $100",
    whereQuery: [
      {
        comparison: ">=",
        value: 51,
        field: "price",
      },
      {
        comparison: "<=",
        value: 100,
        field: "price",
      },
    ],
  },
  {
    name: "$100 - $250",
    id: "$100 - $250",
    whereQuery: [
      {
        comparison: ">=",
        value: 101,
        field: "price",
      },
      {
        comparison: "<=",
        value: 250,
        field: "price",
      },
    ],
  },
  {
    name: "Over $250",
    id: "Over $250",
    whereQuery: [
      {
        comparison: ">=",
        value: 251,
        field: "price",
      },
    ],
  },
];

const FilterPrices = ({ updateParent }) => {
  const [priceFilter, setPriceFilter] = useState({});

  const updateFilter = (whereQuery) => (e) => {
    const { target } = e;
    const { name, checked } = target;
    const filterCopy = { ...priceFilter, [name]: { checked, whereQuery } };
    setPriceFilter(filterCopy);

    console.log(filterCopy);
    const whereList = Object.values(filterCopy)
      .filter((filterState) => {
        return filterState.checked;
      })
      .map((checkedFilterState) => {
        return checkedFilterState.whereQuery;
      })
      .flat(1);

    const sortByFilterPrice = whereList.sort((a, b) => {
      return a.value - b.value;
    });

    updateParent(whereList);
  };

  console.log(priceFilter);

  return (
    <section className="prices filter">
      <ul className="price-filter-list">
        {prices.map(({ name, whereQuery, id }) => {
          return (
            <li className="price-filter-item">
              <input
                type="checkbox"
                id={id}
                name={name}
                onChange={updateFilter(whereQuery)}
              />
              <label htmlFor={id}>{name}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

FilterPrices.propTypes = {
  updateParent: PropTypes.func.isRequired,
};

export default FilterPrices;
