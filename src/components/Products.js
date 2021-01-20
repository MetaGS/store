import { useEffect } from 'react';
import useStorage from '../storage';
import { WIDE_SEARCH, NORMAL_SEARCH, ADD_PHOTOS } from '../storage/types';

import Product from '../components/Product';

import './Products.css';


const ACCESS_KEY = 'LhyTBf3R-M3oegqMrSR1Z6oQWAcVYC32y0jFj3bvdm8';
const SECRET_KEY = 'kBc1NnR-ox59vU31q6iwcrQOv3ZqZ_3I9rH-vXjYnHE';

const myHeaders = new Headers();
myHeaders.append('Authorization', `Client-ID ${ACCESS_KEY}`);
myHeaders.append('X-Total', '30');




const Products = (props) => {

    const [state, dispatch] = useStorage();
    // console.log(state)

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos/?query=${'clothes'}&page=1&per_page=29&orientation=landscape`, {
            headers: myHeaders,
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                // catch an error
            }
        }).then((json) => {
            // console.log(json);

            let photos = json?.results.reduce((returnValue, currentValue, index) => {

                if (index % 3 === 0) {
                    returnValue.push([]);
                }
                returnValue[returnValue.length - 1].push(currentValue);
                return returnValue;
            }, [])
            // console.log(photos)
            dispatch({ type: ADD_PHOTOS, payload: photos })
        })

    }, [])


    return (
        <div className="products-list">
            {
                state?.photos?.map((photos) => {
                    return <Product photos={photos} key={photos[0]?.id} />
                })
            }
        </div>);
}


export default Products;