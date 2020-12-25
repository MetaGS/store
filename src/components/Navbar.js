
import './Navbar.css';

import cart from '../assets/shopping-cart.svg';
import logo from '../assets/logo.svg';
import photo from '../assets/profile.svg';




const Navbar = props => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="left">
                        <img src={logo} alt="Main Logo on the site" />
                    </div>
                    <div className="middle">
                        <ul>
                            <li>Collection</li>
                            <li>New Releases</li>
                            <li>Kids</li>
                            <li>Promotions</li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="search">
                            <input type="text" className="mainpage-search" placeholder="search" />
                            <img src="../assets/search-icon.svg" alt="" />
                        </div>
                        <div className='profile'><img src={photo} alt="Profile svg icon" /></div>
                        <div className="cart"><img src={cart} alt="Cart svg icon" /></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
