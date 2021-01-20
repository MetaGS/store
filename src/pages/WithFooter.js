import { Route, useRouteMatch } from "react-router-dom";

import Main from "../components/Main";
import Footer from "../components/Footer";

import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import ProfilePage from "./ProfilePage";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import CreateProduct from "../components/CreateProduct";
import TestPhoto from "./TestPhoto";
// import useAuthenticate from '../hooks/useAuthenticate';

import shortLogo from "../assets/short-logo.svg";

import "./WithFooter.css";

/* Here is the Sign In Page, Sign Up page, Products and other pAges Which needs footer */

const WithFooter = ({ signIn = false }) => {
  const match = useRouteMatch("/:sign");

  //firebase auth test
  // useAuthenticate();

  // console.log(match);

  return (
    <>
      <Main>
        <Route path="/signup">
          <SignUpPage />
        </Route>

        <Route path="/signin">
          <SignInPage />
        </Route>

        <Route path="/products">
          <ProductsPage />
        </Route>

        <Route path="/product/id">
          <ProductPage />
        </Route>

        <Route path="/cart" component={CartPage} />

        <Route path="/profile" component={ProfilePage} />

        <Route path="/create" component={CreateProduct} />

        <Route path="/testphoto" component={TestPhoto} />
      </Main>
      <Footer />
    </>
  );
};

export default WithFooter;
