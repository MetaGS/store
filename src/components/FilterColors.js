import './FilterColors.css';

const FilterColors = (props) => {
    return (
        <section className="colors filter">
            <ul className="color-filter-list">
                {
                    [' #BB3737', ' #B6A935', '#1AC25D', '#5f0de4', ' #000', ' #fff', '#D4139E', '#EDF116']
                        .map((color) => {
                            return (
                                <li key={color} className="color" style={{ backgroundColor: color }}>color</li>
                            )
                        })
                }
            </ul>
        </section>
    )
}


export default FilterColors;