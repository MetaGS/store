import React, { useState } from 'react'
import PropTypes from 'prop-types'

import UtilsBlock from '../components/UtilsBlock';
import Container from '../components/Container';
import TitleAbhaya from '../components/TitleAbhaya';
import DescriptionP from '../components/DescriptionP';
import productImage from '../assets/small-product.jpg';
import productImage2 from '../assets/product-image2.jpg';
import Button from '../components/Button';

import './CartPage.css';

const CartPage = props => {
    let [quantity, setQuantity] = useState(0);

    let quantityChange = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <Container >
            <section className="cart-page">
                <UtilsBlock />
                <div className="header">
                    <TitleAbhaya text={'Items in your cart'} />
                    <DescriptionP fontSize="2.1rem" text={'You have 3 items'} />
                </div>




                <div className="table">
                    <div className="table-row">

                        <div className="table-data">
                            <span className="table-header"></span>
                            <div className="data"><img src={productImage} alt="cart product" /></div>
                        </div>

                        <div className="table-data">
                            <span className="table-header">Name</span>
                            <h4 className="data title-sm">Nikes Sportwear Synthetic -Fill</h4>
                        </div>

                        <div className="table-data">
                            <span className="table-header">Description</span>
                            <div className="data desc-sm">This shoesh super comfortable for Run at </div>
                        </div>

                        <div className="table-data">
                            <span className="table-header">Price</span>
                            <div className="data table-price">$345</div>
                        </div>

                        <div className="table-data">
                            <span className="table-header">Quantity</span>
                            <div className="data table-quantity">
                                <input type="text" className="table-quantity-input" value={quantity} onChange={quantityChange} /></div>
                        </div>

                        <div className="table-data">
                            <span className="table-header">Total</span>
                            <div className="data table-price">$650</div>
                        </div>

                        <div className="table-data">
                            <span className="table-header"></span>
                            <div className="data">
                                <Button type="primary-button-linear" text={"Remove"} />
                            </div>
                        </div>

                    </div>


                    <div className="table-row">

                        <div className="table-data">
                            <span className="table-header"></span>
                            <div className="data"><img src={productImage2} alt="cart product" /></div>
                        </div>

                        <div className="table-data">

                            <h4 className="data title-sm">Nikes Sportwear Synthetic -Fill</h4>
                        </div>

                        <div className="table-data">

                            <div className="data desc-sm">This shoesh super comfortable for Run at </div>
                        </div>

                        <div className="table-data">

                            <div className="data table-price">$345</div>
                        </div>

                        <div className="table-data">

                            <div className="data table-quantity">
                                <input type="text" className="table-quantity-input" value={quantity} onChange={quantityChange} /></div>
                        </div>

                        <div className="table-data">

                            <div className="data table-price">$650</div>
                        </div>

                        <div className="table-data">
                            <span className="table-header"></span>
                            <div className="data">
                                <Button type="primary-button-linear" text={"Remove"} />
                            </div>
                        </div>

                    </div>
                </div>





            </section>
        </Container>
    )
}

CartPage.propTypes = {

}

export default CartPage




{/* <table className="products-table">
                    <thead>
                        <tr className="table-headers">
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody className="table-background">

                        <tr className="product-properties">

                            <td className="table-photo">
                                <img src={productImage} alt="cart product" />
                            </td>
                            <td className="table-title">Nikes Sportwear Synthetic -Fill</td>
                            <td className="table-desc">This shoesh super comfortable for Run at </td>
                            <td className="table-price">$345</td>
                            <td className="table-quantity">
                                <input type="text" value={quantity} onChange={quantityChange} />
                            </td>
                            <td className="table-total">650</td>
                            <td><button>Remove</button> </td>
                        </tr>

                    </tbody>
                </table> */}