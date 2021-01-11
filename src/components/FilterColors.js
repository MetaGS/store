import './FilterColors.css';

const FilterColors = (props) => {
    let { size = '', style = {} } = props;
    let { marginRight = '' } = style;
    console.log(style)
    return (

        <ul className="color-filter-list">
            {
                [' #BB3737', ' #B6A935', '#1AC25D', '#5f0de4', ' #000', ' #fff', '#D4139E', '#EDF116']
                    .map((color) => {
                        return (
                            <li key={color} className="color" style={{ backgroundColor: color, padding: style.padding ? style.padding : '', marginRight: marginRight, minHeight: "40px", minWidth: "40px" }}>color</li>
                        )
                    })
            }
        </ul>

    )
}


export default FilterColors;