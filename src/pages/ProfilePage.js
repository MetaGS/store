import React from 'react'
import PropTypes from 'prop-types'

import Container from '../components/Container';
import UtilsBlock from '../components/UtilsBlock';
import TitleAbhaya from '../components/TitleAbhaya';
import Button from '../components/Button'


import avatar from '../assets/avatar.jpg';
import './ProfilePage.css';


const ProfilePage = props => {
    return (
        <div className="profile-page">
            <Container>
                <div className="header">
                    <UtilsBlock />
                    <TitleAbhaya text="Account" />
                </div>

                <section className="profile-properties">
                    <div className="avatar-block">
                        <img src={avatar} alt="" className="avatar" />
                        <Button text="upload" type="secondary" />
                        <Button text="remove" type="secondary" />
                    </div>

                    <div className="content-block">
                        <div className="row">
                            <div>
                                <div className="input-title"><label htmlFor="profile-name">Display Name</label> <span className="input-help">Remove</span></div>
                                <input type="text" className="profile-input" id="profile-name" />
                            </div>
                            <div>
                                <div className="input-title"><label htmlFor="profile-fullname">Full Name</label> <span className="input-help">Full Name</span></div>
                                <input type="text" className="profile-input" id="profile-fullname" />
                            </div>
                        </div>

                        <div className="row">
                            <div>
                                <div className="input-title"><label htmlFor="profile-email">Email</label> <span className="input-help">Email delead</span></div>
                                <input type="text" className="profile-input" id="profile-email" />
                            </div>
                            <div>

                                <div className="input-title"><label htmlFor="profile-phone">Phone Number</label> <span className="input-help">Remove</span></div>
                                <input type="text" className="profile-input" id="profile-phone" />
                            </div>
                        </div>


                        <div style={{ maxWidth: "400px" }} className="password-reset"><Button text="Change password" type="primary-button big" /></div>
                    </div>

                    <div className="submit-changes">
                        <Button text="Update Changes" type="secondary big" />
                    </div>
                </section>


            </Container>
        </div>
    )
}




ProfilePage.propTypes = {

}

export default ProfilePage

let Input = <input type="text" className="profile-input" id="profile-name" />;
let Div = <div style={{ fontSize: '2rem', color: 'white', border: "1px solid grey" }}> Name goes here </div>;