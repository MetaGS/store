
import Container from '../components/Container';
import FooterBlock from '../components/FooterBlock';


import './Footer.css';
import socialsArray from "./SvgSocial";

// import facebook from '../assets/facebook-icon.svg'
// import twitter from '../assets/twitter-icon.svg'
// import instagram from '../assets/instagram-icon.svg'
// import youtube from '../assets/youtube-icon.svg'
import locationIcon from '../assets/location-icon.svg'
import copyrightIcon from '../assets/copyright.svg';



const data = [{
    header: 'ABOUT T-FIT',
    list: [
        {
            name: 'Careers',
        },
        {
            name: 'News'
        },
        {
            name: 'Developers'
        },
        {
            name: 'Staff'
        }
    ]
}, {
    header: 'GET HELP',
    list: [
        {
            name: 'How To Order'
        },
        {
            name: 'Order Status'
        },
        {
            name: 'Repayment Claim'
        },
        {
            name: 'Contact Us'
        }
    ]
}];



const Footer = (props) => {
    return (
        <>
            <footer className="footer">
                <Container >
                    <div className="footer-content">

                        <div className="column">
                            <FooterBlock {...data[0]} />
                        </div>

                        <div className="column">
                            <FooterBlock {...data[1]} />
                        </div>

                        <div className="column socials">
                            {
                                socialsArray.map(icon => {
                                    return (<a>{icon}</a>);
                                })
                            }
                        </div>
                    </div>
                </Container>
                <div className="footer-author">
                    <Container
                        style={{ height: "100%", display: 'flex' }}
                        extraClasses={'footer-container'
                        }>

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