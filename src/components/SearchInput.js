import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useSearchInDb } from "../firebase/db";

import ShowSearchResult from "./ShowSearchResult";
import icon from "../assets/search-icon.svg";
import "./SearchInput.css";

const SearchInput = ({ className = "", ...props }) => {
  const wideSearch = false;
  const [searchText, setSearchText] = useState(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [resultBlockFocused, setResultBlockFocused] = useState(false);

  const [searchResult, downloading] = useSearchInDb(
    searchText,
    "/search/searchKeys"
  );

  const [searchResultFromTags, downloadingTags] = useSearchInDb(
    searchText,
    "/products/tags"
  );

  return (
    <>
      <div className={`search ${className}`}>
        <input
          type="text"
          className={`mainpage-search `}
          onFocus={(e) => {
            setInputFocused(true);
          }}
          onBlur={(e) => {
            setTimeout(() => {
              setInputFocused(false);
            }, 0);
          }}
          value={searchText || ""}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder={
            wideSearch ? "BlackBird 72, Levi’s 1965, Nike 707 etc..." : "search"
          }
        />
        <img src={icon} className={"search-icon"} />
        {searchResult && (
          <div
            onMouseOver={() => {
              setResultBlockFocused(true);
            }}
            onMouseLeave={() => {
              setResultBlockFocused(false);
            }}
            className={`search-result-block ${
              inputFocused || resultBlockFocused ? "active" : ""
            }`}
            onClick={() => {
              setResultBlockFocused(false);
            }}
          >
            <ul>
              {downloading && <p style={{ color: "grey" }}>loading...</p>}

              {searchResult &&
                searchResultFromTags &&
                !downloading &&
                searchResult.length === 0 &&
                !searchResultFromTags.length && (
                  <li style={{ color: "grey" }}>No such product</li>
                )}

              {searchResult && searchResultFromTags && !downloading && (
                <>
                  <ShowSearchResult list={searchResult} />
                  <ShowSearchResult
                    list={searchResultFromTags}
                    searchTerm={searchText}
                  />
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

SearchInput.propTypes = {};

export default SearchInput;
