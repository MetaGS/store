import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import useStorage from "../storage";
import { validateCommentInput } from "../utils/validateInputs";

import Button from "./Button";
import SelectPhoneNumber from "./SelectPhoneNumber";
import InlineError from "./InlineError";
import StarConf from "../assets/Star";
import "./WriteReview.css";

let Star = StarConf.bind(null, "#3a3937", 27, 21);

const WriteReview = ({ productId, reviewControl }) => {
  const history = useHistory();

  const [state, dispatch] = useStorage();

  const [stars, setStars] = useState([
    { filled: false },

    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
  ]);

  const [rate, setRating] = useState(0);
  const [opened, setOpened] = useState(true);
  const [redirectTo, setRedirectTo] = useState(false);
  const [comment, setComment] = useState("");
  const [phoneNumberCode, setPhoneNumberCode] = useState("996");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  // check is user signed in
  // if yes show comment block with ratings
  // if no show sign first button
  //
  const onHoverStar = (hoverIndex) => {
    return (e) => {
      setStars([
        ...stars.map((star, index) => {
          if (hoverIndex >= index) {
            return { filled: true };
          }
          return { filled: false };
        }),
      ]);
    };
  };

  const onBlurStar = () => {
    setStars([
      ...stars.map((item, index) => {
        if (index + 1 > rate) {
          return { filled: false };
        }
        return { filled: true };
      }),
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const inputErrors = validateCommentInput(comment, phoneNumber, rate);
    if (Object.keys(inputErrors).length === 0) {
      // send to the server;
      console.log(
        "%cthe comment has been sent. Waiting for response...",
        " color: green; font-size: 1.2rem"
      );
      reviewControl.submitReview(
        comment,
        String(phoneNumberCode) + String(phoneNumber),
        rate
      );

      setErrors({});
    } else {
      setErrors(inputErrors);
    }
  };

  const userAlreadyReviewed = reviewControl.alreadyReviewed;

  if (reviewControl.loading) {
    return <h2>Loading</h2>;
  } else {
    return state.userSignedIn ? (
      (opened && !userAlreadyReviewed && (
        <form className="write-review">
          <div>{String(userAlreadyReviewed)}</div>
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              let same = reviewControl.showReviewed();
              console.log(reviewControl);
            }}
          >
            {" "} */}
          {/* // THIS BLOCK OF COMMENT IS TO CHECK IS AUTHENTICATED USER ... DELETE THEN */}{" "}
          {/* showReviewed
          </button> */}
          <textarea
            name="review"
            id=""
            cols="30"
            rows="5"
            className="review-text"
            value={comment}
            placeholder="Enter review text"
            onChange={({ target }) => {
              setComment(target.value);
            }}
          ></textarea>
          <InlineError error={errors.comment} />
          <div className="row">
            <SelectPhoneNumber
              className="select-code"
              onChange={setPhoneNumberCode}
            />
            <input
              type="text"
              className="review-number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <InlineError error={errors.phoneNumber} />
          <div className="review-rate">
            {stars.map((starConfig, index) => {
              return (
                <span
                  key={index}
                  onPointerOver={onHoverStar(index)}
                  onPointerLeave={onBlurStar}
                  onClick={() => {
                    setRating(+index + 1);
                  }}
                >
                  {Star(starConfig)}
                </span>
              );
            })}
            <InlineError error={errors.rate} />
          </div>
          <Button
            type="big secondary rounded"
            text="Submit Review"
            onClick={onSubmit}
          />
        </form>
      )) ||
        (!opened && !userAlreadyReviewed && (
          <Button
            text="Write a Review"
            type="big secondary rounded"
            onClick={() => {
              setOpened(!opened);
            }}
          />
        )) ||
        (userAlreadyReviewed && (
          <p className="already-reviewed">"You have already reviewed!"</p>
        ))
    ) : redirectTo ? (
      <Redirect
        to={{
          pathname: "/signin",
          state: { refferer: history.location.pathname },
        }}
      />
    ) : (
      <Button
        type="big secondary rounded"
        text="Sign in First"
        onClick={() => {
          setRedirectTo(true);
        }}
      />
    );
  }
};

WriteReview.propTypes = {
  reviewControl: PropTypes.shape({
    alreadyReviewed: PropTypes.bool.isRequired,
  }).isRequired,
};
export default WriteReview;
