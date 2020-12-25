
import Container from '../components/Container';
import './Footer.css';

import facebook from '../assets/facebook-icon.svg'
import twitter from '../assets/twitter-icon.svg'
import instagram from '../assets/instagram-icon.svg'
import youtube from '../assets/youtube-icon.svg'
import locationIcon from '../assets/location-icon.svg'
import copyrightIcon from '../assets/copyright.svg'



const Footer = (props) => {
    return (
        <>
            <footer className="footer">
                <Container >
                    <div className="footer-content">

                        <div className="column">
                            <h5 className="footer-header">ABOUT T-FIT</h5>
                            <ul className="footer-links">

                                <li><a href="">News</a></li>
                                <li><a href="">Carreers</a></li>
                                <li><a href="">Developers</a></li>
                                <li><a href="">Staff</a></li>
                            </ul>
                        </div>

                        <div className="column">
                            <h5 className="footer-header">GET HELP</h5>
                            <ul className="footer-links">

                                <li><a href="">How To Order</a></li>
                                <li><a href="">Order Status</a></li>
                                <li><a href="">Repayment Claim</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <img src={instagram} alt="link to instagram profile" />
                            <img src={twitter} alt="link to facebook profile" />
                            <img src={facebook} alt="link to twitter profile" />
                            <img src={youtube} alt="link to youtube channel" />
                        </div>
                    </div>
                </Container>
                <div className="footer-author">
                    <Container style={{ height: "100%", display: 'flex' }} extraClasses={'footer-container'}>
                        <div className="author-location">
                            <img src={locationIcon} alt="location icon" className="location-icon" />
                            <p>Kyrgyzstan, Bishkek</p>
                        </div>
                        <div className="author">
                            <img src={copyrightIcon} alt="copyright icon" className="copyright" />
                            <p>T-Fit, Alymov M. Inc. All Rights Reserved</p>
                        </div>
                    </Container>
                </div>

            </footer>
        </>
    )
};

export default Footer;