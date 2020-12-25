import { NavLink } from 'react-router-dom';

import Container from '../components/Container';

import './Navbar.css';

import cart from '../assets/shopping-cart.svg';
import logo from '../assets/logo.svg';
import photo from '../assets/profile.svg';




const Navbar = props => {
    return (
        <>
            <nav>
                <Container >
                    <div className="left">
                        <NavLink to="/" activeClassName="active"><img src={logo} alt="Main Logo on the site" /></NavLink>
                    </div>
                    <div className="middle">
                        <ul>
                            <NavLink to="/signup"><li>Collection</li></NavLink>
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
                </Container>
            </nav>
        </>
    )
}

export default Navbar;
