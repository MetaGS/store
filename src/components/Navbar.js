import { NavLink } from "react-router-dom";

import useStorage from "../storage";
import Container from "./Container";
import CartNav from "./CartNav";
import ProfileIcon from "./ProfileIcon";
import "./Navbar.css";

import logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";

const Navbar = (props) => {
  const [state] = useStorage();
  const itemsInCart = state.cart.length;
  let { wideSearch, userSignedIn } = state;

  return (
    <>
      <nav className={wideSearch ? "nav--products" : "top-nav"}>
        <Container>
          <div className="left">
            <NavLink to="/" activeClassName="active">
              <img src={logo} alt="Main Logo on the site" />
            </NavLink>
          </div>
          <div className="middle">
            <ul>
              {/* New Releases */}
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>{" "}
              {/* Kids */}
              <li>
                <NavLink to="/product/id">Product</NavLink>
              </li>{" "}
              {/* Promotions */}
            </ul>
          </div>
          <div className="right">
            <SearchInput />
            <div className="profile">
              {/* <NavLink to="/profile"> */}
              {userSignedIn ? (
                <ProfileIcon />
              ) : (
                // <button
                //   className="btn"
                //   onClick={() => {
                //     signOut();
                //     console.log(state);
                //   }}
                // >
                //   signOut
                // </button>
                <>
                  <button className="btn sm">
                    <NavLink to="/signup">SignUp</NavLink>
                  </button>
                  <button className="btn sm">
                    <NavLink to="/signin">Sign in</NavLink>
                  </button>
                </>
              )}

              {/* */}
              {/* </NavLink> */}
            </div>
            <div className="cart">
              <NavLink to="/cart">
                <CartNav items={itemsInCart} />
              </NavLink>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
