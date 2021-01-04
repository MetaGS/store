
import Main from '../components/Main';
import Footer from '../components/Footer';
import SigningHeader from '../components/SigningHeader';
import RadioSelect from '../components/RadioSelect';
import SignForm from '../components/SignForm';
import Input from '../components/StandartInput';

import shortLogo from '../assets/short-logo.svg'

import './SignUp.css';


const SignUp = (props) => {
    return (
        <>
            <Main extraClasses='parent-wh-inherit'>


                <SignForm
                    header='sign up'
                    description='Sign Up and become a member of our partnership program. Get
                    the latest releases, and be informed about promotions.'
                    submitButtonText='SiGN Up'
                    extraText='Already Signed Up?'
                    extraLink='Sign In'

                >

                    <Input type="email" placeholder="Email:" name="email" style={{ marginTop: '35px' }} />
                    <Input type="password" placeholder="Password:" name="password" />
                    <Input type="text" placeholder="First Name:" name="firstname" />
                    <Input type="text" placeholder="Last Name:" name="lastname" />
                    <Input type="date" placeholder="Date of Birth:" />

                    <RadioSelect />

                </SignForm>



            </Main>
            <Footer />
        </>
    )
}

export default SignUp;