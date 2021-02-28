import { useState } from "react";
import { NavLink } from "react-router-dom";

import useStorage from "../storage";
import Container from "./Container";
import CartNav from "./CartNav";
import ProfileIcon from "./ProfileIcon";
import DescriptionP from "./DescriptionP";
import "./Navbar.css";

import logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";
import Sidebar from "./Sidebar";
import SignButtons from "./SignButtons";

import NavSearchMobile from "./NavSearchMobile";

const Navbar = (props) => {
  const [state] = useStorage();
  const [sidebar, setSidebar] = useState(false);

  const itemsInCart = state.cart.length;
  let { wideSearch, userSignedIn } = state;

  return (
    <>
      <nav className={wideSearch ? "nav--products" : "top-nav"}>
        <Container>
          <div className="left">
            <NavLink to="/" activeClassName="active">
              <img
                src={logo}
                alt="Main Logo on the site"
                className="navbar-site-icon"
              />
            </NavLink>
          </div>
          <div className="middle">
            <ul>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>{" "}
              <li>
                <NavLink to="/product/id">Product</NavLink>
              </li>{" "}
            </ul>
          </div>
          <div className="right">
            <div className="nav-search">
              <SearchInput />
            </div>
            {/* nax-search-mobile appears at 600px max by media */}

            <div className="nav-search-mobile">
              <NavSearchMobile />
            </div>

            <div className="profile">
              {userSignedIn ? (
                <ProfileIcon />
              ) : (
                <div className="signin-signup-buttons">
                  <SignButtons />
                </div>
              )}
            </div>

            <div className="cart">
              <NavLink to="/cart">
                <CartNav items={itemsInCart} />
              </NavLink>
            </div>
            <div>
              <button
                className="burger"
                onClick={() => {
                  if (sidebar) window.document.body.style.overflow = "";
                  else window.document.body.style.overflow = "hidden";
                  setSidebar(!sidebar);
                }}
              >
                <span className="burger-line"> className="burger"</span>
              </button>
            </div>
          </div>
        </Container>

        <div
          className={`nav-sidebar-wrapper ${sidebar ? "active" : ""}`}
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <div className="nav-sidebar">
            <Sidebar />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
