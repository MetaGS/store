import Navbar from '../components/Navbar';





import mainGirl from '../assets/main-girl.png';
import shoes from '../assets/shoes.svg'
import miniblockShoes from '../assets/miniblock-shoes.jpg';
import miniblockJeans from "../assets/miniblock-jeans.jpg";
import jeans from '../assets/jeans.svg';
import jacket from '../assets/jacket.svg';
import miniblockJacket from '../assets/miniblock-jacket.jpg';



const MainHTML = props => {
    return (
        <>
            <Navbar />

            <main className="main">
                <section className="left">
                    <div className="title">
                        <div className="secondary-container">
                            <h1>Bring <br /> Dreams <br /> True</h1>
                        </div>
                    </div>
                    <div className="description">
                        <div className="secondary-container">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page
                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    </p>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className=" secondary-container">
                            <button className='btn primary-button buy-now'>
                                BUY NOW
                    </button>
                            <button className="btn secondary-button subscribe">
                                Name
                    </button>
                        </div>
                    </div>

                    <div className="see-more">
                        <div className="secondary-container">
                            <div className="choose-category">
                                <div className="jacket mini-block">
                                    <img className="miniblock-image" src={miniblockJacket}
                                        alt='background image for link to jacket' />
                                    <img className="miniblock-icon" src={jacket}
                                        alt="icon to jacket field of website" />
                                </div>
                                <div className="jeans mini-block">
                                    <img src={miniblockJeans} alt="" className="miniblock-image"

                                        alt="backgroung for minoblock reference, it is jeans" />
                                    <img src={jeans} alt="icon to jeans field of website" className="miniblock-icon" />
                                </div>
                                <div className="shoes mini-block">
                                    <img src={miniblockShoes} alt="background image for link to shoes field"
                                        className="miniblock-image" />
                                    <img src={shoes} alt="icon to shoes field of website"
                                        className="miniblock-icon" />
                                </div>
                                <div className="arrow ">
                                    arrow to see More
                        </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="right">
                    <object className='main-girl' data={mainGirl} type="image/png">hi</object>

                </section>
            </main>
        </>
    )
}


export default MainHTML;