import React from 'react'
import PropTypes from 'prop-types';

import './TitleAbhaya.css';

const TitleAbhaya = ({ text, fontSize = "", extraClasses }) => {
    return (
        <h2 className={`title-abhaya ${extraClasses}`} style={{ fontSize: fontSize }}>
            {text}
        </h2>
    )
}

TitleAbhaya.propTypes = {

}

export default TitleAbhaya
