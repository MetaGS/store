import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import ReCAPTCHA from "react-google-recaptcha";
import { submitQuestionToDb } from "../firebase/db";
import { validateEmailAndText } from "../utils/validateInputs";

import pic2 from "../assets/about-page-pic3.jpg";
import TitleAbhaya from "../components/TitleAbhaya";
import Description from "../components/DescriptionP";
import InlineError from "../components/InlineError";
import Button from "../components/Button";
import "./ContactUs.css";
import UtilsBlock from "../components/UtilsBlock";
const ContactUs = (props) => {
  const [isRecaptchaPassed, setRecaptchaPassed] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [submittedAlready, setSubmittedAlready] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const onRecaptchaChange = (token) => {
    if (token) {
      setRecaptchaPassed(true);
      setRecaptchaToken(token);
    } else {
      setRecaptchaToken(null);
      setRecaptchaPassed(false);
    }
  };

  const onRecaptchaExpired = (prop) => {
    setRecaptchaPassed(false);
    setRecaptchaToken(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validateEmailAndText(email, question);
    console.log(errors);

    if (isRecaptchaPassed && errors.length === 0) {
      setErrors({});
      setUploading(true);
      submitQuestionToDb(recaptchaToken, email, question).then((response) => {
        if (response) {
          console.log("sumbitted");
          setSubmittedAlready(true);
        } else {
          console.log("error");
        }
        setUploading(false);
      });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="wrapper-contact-us">
      <UtilsBlock className="contact-utils" />
      <img src={pic2} className="video-background-about" alt="" />

      <div className="row-contact">
        <div className="column1-contact column-contact">
          <TitleAbhaya className="contact-title">Contact us</TitleAbhaya>
          <Description className="contact-subtitle">
            We would like to help you!
          </Description>
          <div className="contact-info">
            <a href="tel:+996555116116">
              <AiOutlinePhone className="info-icon" />
              <span className="info-text">+996551116116</span>
            </a>
          </div>
          <div className="contact-info">
            <a href="emailto:marketdeal7788@gmail.com">
              <HiOutlineMail className="info-icon" />
              <span className="info-text">marketdeal7788@gmail.com</span>
            </a>
          </div>
          <div className="contact-info">
            <a href="https://wa.me/+996555124717/?text=Hi!">
              <AiOutlineWhatsApp className="info-icon" />
              <span className="info-text">WhatsApp</span>
            </a>
          </div>
          <div className="contact-info">
            <a href="https://www.google.com/maps">
              <GoLocation className="info-icon" />
              <span className="info-text">
                Kyrgyzstan, Bishkek, Baker's Street 332C
              </span>
            </a>
          </div>
        </div>

        <div className="column2-contact column-contact">
          <form className="contact-form" onSubmit={onSubmit}>
            {submittedAlready && (
              <h2 className="question-submitted">
                Thank You!
                <b /> We will try to response as soon as possible.
              </h2>
            )}
            {!submittedAlready && (
              <>
                <input
                  type="email"
                  className="contact-email contact-input"
                  placeholder="example@example.com"
                  value={email}
                  onChange={({ target }) => {
                    setEmail(target.value);
                  }}
                />
                <InlineError error={errors.email} />
                <textarea
                  name="query text"
                  placeholder="Enter your question"
                  className="contact-question contact-input"
                  value={question}
                  onChange={({ target }) => {
                    setQuestion(target.value);
                  }}
                ></textarea>
                <InlineError error={errors.text} />
                <ReCAPTCHA
                  sitekey="6LcC2V4aAAAAACofGGkc_OSSm-Bn06woSzZQu-Tb"
                  onChange={onRecaptchaChange}
                  onExpired={onRecaptchaExpired}
                />
                <Button
                  disabled={!isRecaptchaPassed || uploading}
                  className="contact-submit-btn"
                >
                  {uploading ? "Submitting..." : "Submit"}
                </Button>
              </>
            )}
          </form>

          {/* 6LcC2V4aAAAAACofGGkc_OSSm-Bn06woSzZQu-Tb */}
        </div>
      </div>
    </div>
  );
};

ContactUs.propTypes = {};

export default ContactUs;
