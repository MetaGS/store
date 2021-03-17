import { useState } from "react";
import { NavLink as Link, useHistory } from "react-router-dom";

import SigningHeader from "./SigningHeader";

import "./SignForm.css";
import Button from "./Button";

const SignForm = ({
  children,
  header,
  description,
  extraText,
  extraLink,
  signUp = false,
  submitButtonText,
  onSubmit = () => {},
  onChecked = () => {},
}) => {
  let [conditionsChecked, setChecked] = useState(false);
  const onCheckButtonChange = (e) => {
    setChecked(e.target.checked);
    console.log();
  };

  return (
    <div className="center">
      <div className="signing">
        <form action="" name="sign-up" onSubmit={onSubmit}>
          <SigningHeader header={header} description={description} />
          <div className="inputs">
            {children}

            <div className="checkbox-terms">
              <input
                type="checkbox"
                className="checkbox"
                id="checked"
                onChange={onCheckButtonChange}
              />
              {signUp ? (
                <>
                  <p className="terms-self">
                    I'm agree with Fit's{" "}
                    <a href="#" className="terms-link">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="terms-link">
                      Term of Use.
                    </a>
                  </p>
                </>
              ) : (
                <>
                  <label htmlFor="checked" className="terms-self">
                    Keep me logged in.
                  </label>
                  <p className="terms-self terms-self--sign-in">
                    <a href="#" className="terms-link">
                      Forgotten Password
                    </a>
                  </p>
                </>
              )}
            </div>

            <Button
              type="primary-button"
              className="sign-in-form__submit"
              disabled={!conditionsChecked}
            >
              {submitButtonText}
            </Button>
          </div>
          <div className="extra">
            <p className="option">
              {extraText}{" "}
              <Link to={signUp ? "/signin" : "/signup"} className="extra-link">
                <span className="">{extraLink}</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignForm;
