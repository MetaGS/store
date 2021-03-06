import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Star from "../assets/Star";

import "./Rating.css";
const Rating = ({ productRating = 0, className = "" }) => {
  const ratingStar = Star.bind(null, undefined, undefined, undefined);

  const roundedRating = Math.round(productRating);

  return (
    <div className={`rating-stars ${className}`}>
      {Array(5)
        .fill("star")
        .map((_, index) => {
          return (
            <Fragment key={index}>
              {roundedRating > index &&
                ratingStar({
                  filled: true,
                  className: "filled",
                })}
              {roundedRating <= index &&
                ratingStar({ filled: false, className: "unfilled" })}
            </Fragment>
          );
        })}
    </div>
  );
};

Rating.propTypes = {};

export default Rating;

//experiment in the future
/* <span>
        <svg
          {...size}
          viewBox="0 0 90 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="container"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            className="box"
            d="M90 0H0V20H90V0ZM10.3471 8.80041L9 5L7.65292 8.80041H3.29366L6.82037 11.1492L5.47329 14.9496L9 12.6008L12.5267 14.9496L11.1796 11.1492L14.7063 8.80041H10.3471ZM27 5L28.3471 8.80041H32.7063L29.1796 11.1492L30.5267 14.9496L27 12.6008L23.4733 14.9496L24.8204 11.1492L21.2937 8.80041H25.6529L27 5ZM46.3471 8.80041L45 5L43.6529 8.80041H39.2937L42.8204 11.1492L41.4733 14.9496L45 12.6008L48.5267 14.9496L47.1796 11.1492L50.7063 8.80041H46.3471ZM63 5L64.3471 8.80041H68.7063L65.1796 11.1492L66.5267 14.9496L63 12.6008L59.4733 14.9496L60.8204 11.1492L57.2937 8.80041H61.6529L63 5ZM82.3471 8.80041L81 5L79.6529 8.80041H75.2937L78.8204 11.1492L77.4733 14.9496L81 12.6008L84.5267 14.9496L83.1796 11.1492L86.7063 8.80041H82.3471Z"
            fill={fillBox}
          />
          <path
            d="M9 3.49605L10.5919 7.98522L10.7089 8.31511L11.0589 8.31809L15.991 8.36003L12.0517 11.1146L11.7458 11.3285L11.8639 11.6826L13.3511 16.1417L9.27924 13.4002L9 13.2122L8.72076 13.4002L4.64889 16.1417L6.13611 11.6826L6.2542 11.3285L5.94832 11.1146L2.009 8.36003L6.94113 8.31809L7.29114 8.31511L7.40812 7.98522L9 3.49605Z"
            stroke={strokeStar}
            className="stroke"
          />
          <path
            d="M27 3.49605L28.5919 7.98522L28.7089 8.31511L29.0589 8.31809L33.991 8.36003L30.0517 11.1146L29.7458 11.3285L29.8639 11.6826L31.3511 16.1417L27.2792 13.4002L27 13.2122L26.7208 13.4002L22.6489 16.1417L24.1361 11.6826L24.2542 11.3285L23.9483 11.1146L20.009 8.36003L24.9411 8.31809L25.2911 8.31511L25.4081 7.98522L27 3.49605Z"
            stroke={strokeStar}
            className="stroke"
          />
          <path
            d="M45 3.49605L46.5919 7.98522L46.7089 8.31511L47.0589 8.31809L51.991 8.36003L48.0517 11.1146L47.7458 11.3285L47.8639 11.6826L49.3511 16.1417L45.2792 13.4002L45 13.2122L44.7208 13.4002L40.6489 16.1417L42.1361 11.6826L42.2542 11.3285L41.9483 11.1146L38.009 8.36003L42.9411 8.31809L43.2911 8.31511L43.4081 7.98522L45 3.49605Z"
            stroke={strokeStar}
            className="stroke"
          />
          <path
            d="M63 3.49605L64.5919 7.98522L64.7089 8.31511L65.0589 8.31809L69.991 8.36003L66.0517 11.1146L65.7458 11.3285L65.8639 11.6826L67.3511 16.1417L63.2792 13.4002L63 13.2122L62.7208 13.4002L58.6489 16.1417L60.1361 11.6826L60.2542 11.3285L59.9483 11.1146L56.009 8.36003L60.9411 8.31809L61.2911 8.31511L61.4081 7.98522L63 3.49605Z"
            stroke={strokeStar}
            className="stroke"
          />
          <path
            d="M81 3.49605L82.5919 7.98522L82.7089 8.31511L83.0589 8.31809L87.991 8.36003L84.0517 11.1146L83.7458 11.3285L83.8639 11.6826L85.3511 16.1417L81.2792 13.4002L81 13.2122L80.7208 13.4002L76.6489 16.1417L78.1361 11.6826L78.2542 11.3285L77.9483 11.1146L74.009 8.36003L78.9411 8.31809L79.2911 8.31511L79.4081 7.98522L81 3.49605Z"
            stroke={strokeStar}
            className="stroke"
          />
        </svg>
      </span> */
