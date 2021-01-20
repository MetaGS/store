import React, { useState } from 'react'
import PropTypes from 'prop-types'

import UtilsBlock from '../components/UtilsBlock';
import Container from '../components/Container';
import TitleAbhaya from '../components/TitleAbhaya';
import DescriptionP from '../components/DescriptionP';
import productImage from '../assets/small-product.jpg';
import productImage2 from '../assets/product-image2.jpg';
import Button from '../components/Button';

import CartItem from '../components/CartItem';

import './CartPage.css';

const CartPage = props => {


    return (
        <Container >
            <section className="cart-page">
                <UtilsBlock />
                <div className="header">
                    <TitleAbhaya text={'Items in your cart'} />
                    <DescriptionP fontSize="2.1rem" text={'You have 3 items'} />
                </div>

                <div className="table">

                    <CartItem title="Nikes Sportwear Synthetic -Fill" desc="This shoesh super comfortable for Run at" price={145} img={productImage} />

                    <CartItem title="Nikes Sportwear Synthetic -Fill" desc="This shoesh super comfortable for Run at" price={145} img={productImage2} />

                    <div className="total-price"><span>$500</span></div>
                    <div className="cart-order-btn">
                        <Button text="Order" type="primary-button big" />
                    </div>
                </div>

            </section>
        </Container>
    )
}

CartPage.propTypes = {

}

export default CartPage




