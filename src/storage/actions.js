import { SIGN_IN, SIGN_OUT, ADD_PRODUCTS, ADD_TO_CART } from "./types";

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

export const addToCartDispatch = (cartItem) => {
  return {
    type: ADD_TO_CART,
    payload: cartItem,
  };
};
