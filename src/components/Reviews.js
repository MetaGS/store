import React from 'react'
import PropTypes from 'prop-types'

import WriteReview from './WriteReview';
import Review from './Review';

import './Reviews.css'

const Reveiws = props => {
    return (
        <div>
            <WriteReview />
            <Review />
            <Review />
        </div>
    )
}

Reveiws.propTypes = {

}

export default Reveiws
