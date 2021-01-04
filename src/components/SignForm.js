import SigningHeader from './SigningHeader';



const SignForm = ({ children, header, description, extraText, extraLink, signUp = false, submitButtonText }) => {
    return (
        <div className="signing">
            <form action="" name="sign-up">
                <SigningHeader
                    header={header}
                    description={description}
                />
                <div className="inputs">


                    {children}

                    <div className="checkbox-terms">
                        {signUp ?
                            (<><input type="checkbox" className="checkbox" />
                                <p className="terms-self">
                                    I'm agree with Fit's <a href="#" className="terms-link">Privacy Policy</a> and <a href="#"
                                        className="terms-link">
                                        Term of Use.</a>
                                </p></>) : (<>
                                    <input type="checkbox" class="checkbox" />
                                    <p class="terms-self">Keep me logged in.</p>
                                    <p class="terms-self terms-self--sign-in">
                                        <a href="#" class="terms-link">Forgotten Password</a>

                                    </p></>)
                        }
                    </div>

                    <button className="btn primary-button submit" type="submit">{submitButtonText}</button>
                </div>
                <div className="extra">
                    <p className="option">{extraText} <a href="#" className="extra-link"><span className="">{extraLink}</span></a></p>
                </div>
            </form>
        </div >
    )
}

export default SignForm;
