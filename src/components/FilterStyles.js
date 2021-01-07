

import './FilterStyles.css';


const FilterStyles = (props) => {
    return (
        <section className="styles filter">
            <ul className="style-filter-items">
                <li className="style-filter-item"><a href="#">Lifestyle</a></li>
                <li className="style-filter-item"><a href="#">Kids</a></li>
                <li className="style-filter-item"><a href="#">Casual</a></li>
                <li className="style-filter-item"><a href="#">Sport</a></li>
                <li className="style-filter-item"><a href="#">Men</a></li>
            </ul>
        </section>
    )
}

export default FilterStyles;
