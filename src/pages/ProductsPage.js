import { useContext, useEffect } from 'react';
import { Context } from '../hooks/useContextWithReducer';
import { WIDE_SEARCH, NORMAL_SEARCH } from '../hooks/useContextWithReducer';


import Filters from '../components/FIlters';
import Products from '../components/Products';

import './ProductsPage.css'


const ProductsPage = (props) => {
    const { state, dispatch } = useContext(Context);


    useEffect(() => {
        dispatch({ type: WIDE_SEARCH });

        return () => {
            dispatch({ type: NORMAL_SEARCH })
        }
    }, [])

    console.log(state)
    return (
        <main className="main main--products">

            <section className="sort">
                <p>Sort By:</p>
                <ul className="sort-items">

                    <li className="sort-item"><a href="#">Category</a></li>
                    <li className="sort-item"><a href="#">Discount</a></li>
                    <li className="sort-item"><a href="#">Price</a></li>
                    <li className="sort-item"><a href="#">Rating</a></li>
                </ul>
            </section>
            <section className="content">

                <Filters />

                <Products />
            </section>


        </main >
    );

}

export default ProductsPage;