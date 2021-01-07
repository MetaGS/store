
import './FilterPrices.css';

const FilterPrices = (props) => {
    return (
        <section className="prices filter">
            <ul className="price-filter-list">
                <li className="price-filter-item"><input type="checkbox" id="$50" /><label htmlFor="$50">$0 - $50</label>
                </li>
                <li className="price-filter-item"><input type="checkbox" id="$100" /><label htmlFor="$100">$50 -
                                $100</label></li>
                <li className="price-filter-item"><input type="checkbox" id="$250" /><label htmlFor="$250">$100 -
                                $250</label></li>
                <li className="price-filter-item"><input type="checkbox" id="over250" /><label htmlFor="over250">Over
                                $250</label>
                </li>
            </ul>
        </section>
    )
}

export default FilterPrices;
