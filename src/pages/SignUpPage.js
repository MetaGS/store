import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import { useHistory } from "react-router-dom";

import Input from "../components/StandartInput";
import SignForm from "../components/SignForm";
import RadioSelect from "../components/RadioSelect";
import InlineError from "../components/InlineError";

import { signUp } from "../firebase/auth";
import useFormInput from "../hooks/useFormInput";
import useStorage from "../storage";
import validateInputs from "../utils/validateInputs";

const SignUpPage = (props) => {
  let history = useHistory();

  let [state, dispatch] = useStorage();
  let [errors, setErrors] = useState({});
  let email = useFormInput("");
  let password = useFormInput("");
  let name = useFormInput("");

  useEffect(() => {
    if (state.userSignedIn && history.location.pathname === "/signup") {
      history.push("/products");
    }
  }, [history.location.pathname, state.userSignedIn]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    let validatedErrors = validateInputs(
      email.value,
      password.value,
      name.value
    );

    if (Object.keys(validatedErrors).length === 0) {
      console.log("starting signing up");

      signUp(email.value, password.value, name.value)
        .then((user) => {})
        .catch((error) => {
          console.log("%cerror", "color:red; font-weight: 600");
          console.log(error.message);
          setErrors({ serverError: error.message });
        });

      setErrors({});
    } else {
      setErrors(validatedErrors);
    }
  };

  return (
    <>
      <SignForm
        header="sign up"
        description="Sign Up and become a member of our partnership program. Get
                    the latest releases, and be informed about promotions."
        submitButtonText="SiGN Up"
        extraText="Already Signed Up?"
        extraLink="Sign In"
        signUp
        onSubmit={onSubmit}
      >
        <Input
          type="email"
          placeholder="Email:"
          name="email"
          style={{ marginTop: "35px" }}
          {...email}
        />
        <InlineError error={errors.email} />

        <Input
          type="password"
          placeholder="Password:"
          name="password"
          {...password}
        />
        <InlineError error={errors.password} />

        <Input
          type="text"
          placeholder="First Name:"
          name="firstname"
          {...name}
        />
        <InlineError error={errors.name} />
        <InlineError error={errors.serverError} />

        {/* <Input type="text" placeholder="Last Name:" name="lastname" />
            <Input type="date" placeholder="Date of Birth:" />

            <RadioSelect /> */}
      </SignForm>
    </>
  );
};

SignUpPage.propTypes = {};

export default SignUpPage;
