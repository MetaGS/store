
import Product from '../components/Product';
import ProductMobile from './ProductMobile';

import './SeeMoreProducts.css'

const SeeMoreProducts = (props) => {
    return (
        <div className="product-see-more">
            <h3 className="see-more-title">See More</h3>
            <div className="see-more-list">
                <Product mobile />
                <Product mobile />
                <Product mobile />
            </div>
        </div>
    )
}

export default SeeMoreProducts;