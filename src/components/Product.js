import { limitText } from '../utils/limitText.js'


import './Product.css'

import jeans from '../assets/jeans.jpg';
import star from '../assets/star.svg';
import starTransparent from '../assets/star-transparent.svg';

const Product = ({ photos: [photo1, photo2, photo3] = [{}, {}, {}], mobile = false }) => {

    let { user: { first_name: firstName = 'Nike Rivera', last_name: lastName = '72Z NK' } = {},
        description = "No Description entered", urls: { regular = jeans } = {},
    } = photo1;



    return (
        <article className={`product ${mobile ? 'mobile' : ''}`}>
            <img className="product-photo" alt="shoes product image" src={regular} />
            <div className="product-content">
                <div>
                    <h4 className="product-title">{limitText(`${firstName} ${lastName}`)}</h4>
                    <p className="product-description"> {limitText(description, 60)}</p>
                </div>
                <div className="price-and-rating">
                    <span className="product-price">
                        $350
                            </span>
                    {!mobile && <div className="rating">
                        <span className="rating-quantity">(19)</span>
                        <span className="star"><img src={star} alt="rating star" /></span>
                        <span className="star"><img src={star} alt="rating star" /></span>
                        <span className="star"><img src={star} alt="rating star" /></span>
                        <span className="star"><img src={star} alt="rating star" /></span>
                        <span className="star"><img src={starTransparent} alt="rating star" /></span>
                    </div>}
                </div>
            </div>
        </article>
    );
}

export default Product;