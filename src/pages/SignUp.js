import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';

import './SignUp.css';

const SignUp = (props) => {
    return (
        <>
            <Main>
                <section class="parent-wh-inherit">

                    <div class="signing">
                        <form action="" name="sign-up">
                            <div class="signing-description">

                                <img src="../assets/short-logo.svg" alt="website logo in the beginning" />
                                <h3 class="signing-title">Sign Up</h3>
                                <p class="signing-description-self">Sign Up and become a member of our partnership program. Get
                the latest releases, and be informed about promotions.</p>

                            </div>
                            <div class="inputs">
                                <input type="email" class="input text-regular" placeholder="Email:" name="email" />
                                <input type="password" class="input text-regular" placeholder="Password:" name="password" />
                                <input type="text" class="input text-regular" placeholder="First Name:" name="firstname" />
                                <input type="text" class="input text-regular" placeholder="Last Name:" name="lastname" />
                                <input type="date" class="input text-regular" placeholder="Date of Birth:" />

                                <div class="choose-gender">
                                    <input type="radio" name="gender" id="male" />
                                    <label for="male" class="input">
                                        Male
                                    </label>
                                    <input type="radio" name="gender" id="female" />
                                    <label for="female" class="input">
                                        Female
                                    </label>
                                </div>

                                <div class="checkbox-terms">
                                    <input type="checkbox" class="checkbox" />
                                    <p class="terms-self">
                                        I'm agree with Fit's <a href="#" class="terms-link">Privacy Policy</a> and <a href="#"
                                            class="terms-link">
                                            Term of Use.</a>
                                    </p>
                                </div>

                                <button class="btn primary-button submit" type="submit">SIGN UP</button>
                            </div>
                            <div class="extra">
                                <p class="option">Already Have An Account? <a href="#" class="extra-link"><span class="">Sign
                        In.</span></a></p>
                            </div>
                        </form>
                    </div>
                </section>{/* Section paren end */}

            </Main>
            <Footer />
        </>
    )
}

export default SignUp;