import FilterStyles from './FilterStyles';
import FilterPrices from './FilterPrices';
import FilterColors from './FilterColors';

import './Filters.css';

const Filters = (props) => {
    return (
        <div className="filters">
            <FilterStyles />
            <FilterPrices />
            <section className="filter"><FilterColors style={{ padding: "11%" }} /></section>
        </div>
    )
};

export default Filters;
