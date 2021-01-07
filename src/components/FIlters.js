import FilterStyles from './FilterStyles';
import FilterPrices from './FilterPrices';
import FilterColors from './FilterColors';

import './Filters.css';

const Filters = (props) => {
    return (
        <div className="filters">
            <FilterStyles />
            <FilterPrices />
            <FilterColors />
        </div>
    )
};

export default Filters;
