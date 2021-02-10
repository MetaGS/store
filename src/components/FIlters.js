import FilterStyles from "./FilterStyles";
import FilterPrices from "./FilterPrices";
import FilterColors from "./FilterColors";

import "./Filters.css";

const Filters = ({ updateParent }) => {
  return (
    <div className="filters">
      <FilterStyles updateParent={updateParent.bind(null, "styleFilter")} />
      <FilterPrices updateParent={updateParent.bind(null, "priceFilter")} />
      <section className="filter">
        <FilterColors
          style={{ padding: "11%" }}
          updateParent={updateParent.bind(null, "colorFilter")}
        />
      </section>
    </div>
  );
};

export default Filters;
