import React, { useState } from "react";
import PropTypes from "prop-types";

import searchIcon from "../assets/search-icon.svg";
import "./NavSearchMobile.css";
import SearchInput from "./SearchInput";
const NavSearchMobile = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchInputFocus, setSearchInputFocus] = useState(false);

  const onBlur = () => {
    setSearchInputFocus(false);
  };

  const onFocus = () => {
    setSearchInputFocus(true);
  };

  const isActive = () => {
    return openSearch || searchInputFocus ? "active" : "";
  };

  return (
    <>
      <button
        className="mobile-search-button"
        onClick={() => {
          setOpenSearch(!openSearch);
        }}
        onBlur={() => {
          setOpenSearch(false);
        }}
      >
        <img src={searchIcon} alt="search" className="mobile-search-icon" />
      </button>
      <div
        onFocus={onFocus}
        onBlur={onBlur}
        className={`mobile-search-input ${isActive()}`}
      >
        <SearchInput />
      </div>
    </>
  );
};

NavSearchMobile.propTypes = {};

export default NavSearchMobile;
