import { SIGN_IN, SIGN_OUT, ADD_PRODUCTS } from "./types";

export const signIn = (user) => {
  return {
    type: SIGN_IN,
    payload: user,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const addProducts = (products) => {
  return {
    type: ADD_PRODUCTS,
    payload: products,
  };
};
