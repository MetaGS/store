import SeeMoreBlock from './SeeMoreBlock';


import './SeeMore.css';

import shoes from '../assets/shoes.svg'
import miniblockShoes from '../assets/miniblock-shoes.jpg';
import miniblockJeans from "../assets/miniblock-jeans.jpg";
import jeans from '../assets/jeans.svg';
import jacket from '../assets/jacket.svg';
import miniblockJacket from '../assets/miniblock-jacket.jpg';

<SeeMoreBlock {...{ background: miniblockJeans, logo: jeans, title: 'jeans', }} />

const data = [
    {
        logo: jeans,
        background: miniblockJeans,
        title: 'jeans',
        additionalClasses: 'jeans'
    },

    {
        logo: shoes,
        background: miniblockShoes,
        title: 'shoes',
        additionalClasses: 'shoes',
    },
    {
        logo: jacket,
        background: miniblockJacket,
        title: 'jacket',
        additionalClasses: 'jacket',
    },
]

const SeeMore = (props) => {
    return (
        <>
            <div className="see-more">
                <div className="choose-category">
                    {
                        data.map(block => {
                            return <SeeMoreBlock {...block} key={block.title} />
                        })
                    }

                    <div className="arrow ">
                        arrow to see More
                        </div>
                </div>

            </div>
        </>
    )
}

export default SeeMore;