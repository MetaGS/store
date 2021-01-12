import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button';

import shareIcon from '../assets/share.svg';
import './UtilsBlock.css';


const UtilsBlock = ({ share = false, children = null }) => {
    return (

        <section className="utils">
            <Button type='secondary-button' text='BACK' />
            <div className="product-links">
                {/* <button className="btn-icon">
                    <img src={addFavorites} alt="" />
                </button> */}
                {children}
                {share && <button className="btn-icon">
                    <img src={shareIcon} alt="share product" />
                </button>}
            </div>
        </section>

    )
}

UtilsBlock.propTypes = {

}

export default UtilsBlock
