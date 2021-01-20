import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';
import './CartItem.css';

const CartItem = ({ firstRow = false, title, desc, img, price }) => {

    let [quantity, setQuantity] = useState(1);

    let quantityChange = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <div className="table-row">

            <div className="table-data">
                <span className="table-header"></span>
                <div className="data"><img src={img} alt="cart product" /></div>
            </div>

            <div className="table-data">
                <span className="table-header">{firstRow && 'Name'}</span>
                <h4 className="data title-sm">{title}</h4>
            </div>

            <div className="table-data">
                <span className="table-header">{firstRow && 'Description'}</span>
                <div className="data desc-sm">{desc}</div>
            </div>

            <div className="table-data">
                <span className="table-header">{firstRow && 'Price'}</span>
                <div className="data table-price">{`$${price}`}</div>
            </div>

            <div className="table-data">
                <span className="table-header">{firstRow && 'Quantity'}</span>
                <div className="data table-quantity">
                    <input type="text" className="table-quantity-input" value={quantity} onChange={quantityChange} /></div>
            </div>

            <div className="table-data">
                <span className="table-header">{firstRow && 'Total'}</span>
                <div className="data table-price">{`$${price * quantity}`}</div>
            </div>

            <div className="table-data">
                <span className="table-header"></span>
                <div className="data">
                    <Button type="primary-button-linear" text={"Remove"} />
                </div>
            </div>

        </div>
    )
}

CartItem.propTypes = {

}

export default CartItem
