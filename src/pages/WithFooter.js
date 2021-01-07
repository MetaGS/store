import { Route, useRouteMatch } from 'react-router-dom';

import Main from '../components/Main';
import Footer from '../components/Footer';
import SigningHeader from '../components/SigningHeader';
import RadioSelect from '../components/RadioSelect';
import SignForm from '../components/SignForm';
import Input from '../components/StandartInput';
import ProductsPage from './ProductsPage';

import shortLogo from '../assets/short-logo.svg'

import './WithFooter.css';

/* Here is the Sign In Page, Sign Up page, Products and other pAges Which needs footer */

const WithFooter = ({ signIn = false }) => {
    const match = useRouteMatch('/:sign');

    console.log(match);

    return (
        <>
            <Main extraClasses='center-fwidth'>


                <Route path='/signup'>
                    <SignForm
                        header='sign up'
                        description='Sign Up and become a member of our partnership program. Get
                    the latest releases, and be informed about promotions.'
                        submitButtonText='SiGN Up'
                        extraText='Already Signed Up?'
                        extraLink='Sign In'
                        signUp
                    >

                        <Input type="email" placeholder="Email:" name="email" style={{ marginTop: '35px' }} />
                        <Input type="password" placeholder="Password:" name="password" />
                        <Input type="text" placeholder="First Name:" name="firstname" />
                        <Input type="text" placeholder="Last Name:" name="lastname" />
                        <Input type="date" placeholder="Date of Birth:" />

                        <RadioSelect />

                    </SignForm>
                </Route>

                <Route path='/signin'>

                    <SignForm
                        header='your account'
                        submitButtonText='SiGN Up'
                        extraText='Not A Member?'
                        extraLink='Sign Up'
                        signIn
                    >

                        <Input type="email" placeholder="Email:" name="email" style={{ marginTop: '35px' }} />
                        <Input type="password" placeholder="Password:" name="password" />


                    </SignForm>

                </Route>

                <Route path='/products'>
                    <ProductsPage />
                </Route>

            </Main>
            <Footer />
        </>
    )
}

export default WithFooter;