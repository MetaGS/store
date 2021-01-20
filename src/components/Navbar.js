import { NavLink } from "react-router-dom";

import useStorage from "../storage";
import Container from "../components/Container";
import { signOut } from "../firebase/auth";

import "./Navbar.css";

import cart from "../assets/shopping-cart.svg";
import logo from "../assets/logo.svg";
import photo from "../assets/profile.svg";

const Navbar = (props) => {
  const [state] = useStorage();
  let { wideSearch, userSignedIn } = state;
  let searchBar = (
    <div className={`search ${wideSearch ? "search--products" : ""}`}>
      <input
        type="text"
        className={`mainpage-search ${
          wideSearch ? "mainpage-search--products" : ""
        }`}
        placeholder={
          wideSearch ? "BlackBird 72, Levi’s 1965, Nike 707 etc..." : "search"
        }
      />
      <img
        src="../assets/search-icon.svg"
        alt=""
        className={wideSearch ? "search-icon--products" : ""}
      />
    </div>
  );

  return (
    <>
      <nav className={wideSearch ? "nav--products" : ""}>
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
              {/* <li><NavLink to="/check">check</NavLink></li>
                <li><NavLink to="/check2">check2</NavLink></li> */}
            </ul>
            {wideSearch && searchBar}
          </div>
          <div className="right">
            {wideSearch || searchBar}
            <div className="profile">
              <NavLink to="/profile">
                {userSignedIn ? (
                  <button
                    className="btn"
                    onClick={() => {
                      signOut();
                      console.log(state);
                    }}
                  >
                    signOut
                  </button>
                ) : (
                  <>
                    <button className="btn">
                      <NavLink to="/signup">SignUp</NavLink>
                    </button>
                    <button className="btn">
                      <NavLink to="/signin">Sign in</NavLink>
                    </button>
                  </>
                )}

                {/* <img src={photo} alt="Profile svg icon" /> */}
              </NavLink>
            </div>
            <div className="cart">
              <NavLink to="/cart">
                <img src={cart} alt="Cart svg icon" />
              </NavLink>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
