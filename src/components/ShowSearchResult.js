import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ShowSearchResult = ({ list, searchTerm }) => {
  return list?.map((foundItem) => {
    const productTitle = foundItem?.searchKeys?.join(" ");
    const tag = foundItem?.tags?.find((tag) => {
      return tag === searchTerm;
    });
    const { productId, id } = foundItem;
    return (
      <li
        className="search-result-item"
        key={productId || id}
        onClick={() => {
          console.log("clicked");
        }}
      >
        <Link style={{ width: "100%" }} to={`/products/${productId || id}`}>
          {productTitle || tag}
        </Link>
      </li>
    );
  });
};

ShowSearchResult.propTypes = {};

export default ShowSearchResult;

// const matchIndex = productTitle.indexOf(searchText);
// const matchText = productTitle.slice(
//   matchIndex,
//   searchText.length   REMAKE THIS SHIT!!! THERE IS PROBLEM, AND BETTER TO MOVE TO OTHER FILE
// );
// const remainTextBefore = productTitle.slice(0, matchIndex);
// const remainTextAfter = productTitle.slice(
//   searchText.length
// );

// {remainTextBefore} <b>{matchText}</b>{" "}
//       {remainTextAfter}
