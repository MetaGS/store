import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";

import MainHTML from "./pages/MainHTML";
import Navbar from "./components/Navbar";
import useAuthentication from "./firebase/auth";
import Main from "./components/Main";
import Footer from "./components/Footer";

import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import CreateProduct from "./components/CreateProduct";
import FavoritesPage from "./pages/FavoritesPage";
import HowToOrder from "./pages/HowToOrder";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import Careers from "./pages/Careers";

import "./App.css";

function App() {
  useAuthentication();

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <MainHTML />
        </Route>
        <>
          {/* This fragment is IMPORTANT, if you delete it, then the footer will go on */}
          <Main>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/signin">
              <SignInPage hi={"wtf it works"} />
            </Route>
            <Route path="/products" exact>
              <ProductsPage />
            </Route>
            <Route path="/products/:id">
              <ProductPage />
            </Route>
            <Route path="/cart" component={CartPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/create" component={CreateProduct} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="/how-to-order" component={HowToOrder} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/careers" component={Careers} />
            <Route path="/about" component={About} />
          </Main>
          <Footer />
        </>
      </Switch>
    </div>
  );
}

export default App;

// rfcp edf rafcp
