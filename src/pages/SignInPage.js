import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import SignForm from "../components/SignForm";
import Input from "../components/StandartInput";
import InlineError from "../components/InlineError";

import { signIn } from "../firebase/auth";
import useFormInput from "../hooks/useFormInput";
import validateInputs from "../utils/validateInputs";
import useStorage from "../storage";

const SignInPage = (props) => {
  const [state, dispatch] = useStorage();
  const history = useHistory();
  const email = useFormInput("");
  const password = useFormInput("");
  const [errors, setErrors] = useState({});
  console.log(history);

  // const redirectTo = new URL(document.location).searchParams;
  // console.log(redirectTo.get("name"));

  let redirectTo = history.location.state?.refferer || "/products";
  console.log(redirectTo);
  // useEffect(() => {
  //   console.log(history);
  //   if (state.userSignedIn && history.location.pathname === "/signin") {
  //     console.log("signinPage history.push()");
  //     history.push("/products");
  //   }
  // });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    let inputErrors = validateInputs(email.value, password.value);

    if (Object.keys(inputErrors).length === 0) {
      console.log("%c---------------", "color: red");
      console.log(errors);

      signIn(email.value, password.value)
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          console.log("%cerror", "color:red; font-weight: 600");
          console.log(error.message);
          setErrors({ global: error.message });
        });

      console.log(
        "%c signin process started",
        "color: green; font-weight: 600"
      );
    } else {
      setErrors(inputErrors);
    }
  };

  return state.userSignedIn ? (
    <Redirect to={redirectTo} />
  ) : (
    <div>
      <SignForm
        header="your account"
        submitButtonText="SiGN Up"
        extraText="Not A Member?"
        extraLink="Sign Up"
        signIn
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
        <InlineError error={errors.global} />
      </SignForm>
    </div>
  );
};

SignInPage.propTypes = {};

export default SignInPage;
