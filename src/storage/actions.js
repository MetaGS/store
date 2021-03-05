import {
  SIGN_IN,
  SIGN_OUT,
  ADD_PRODUCTS,
  ADD_TO_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVORITES,
  SET_CART,
  SET_FAVORITES,
  ADD_CART_ORDER,
} from "./types";

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

export const addToCartAction = (cartItem) => {
  return {
    type: ADD_TO_CART,
    payload: cartItem,
  };
};

export const addToFavoritesAction = (favoritesItem) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: favoritesItem,
  };
};

export const removeFromCartAction = (cartItem) => {
  return {
    type: REMOVE_FROM_CART,
    payload: cartItem,
  };
};

export const removeFromFavoritesAction = (favoritesItem) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: favoritesItem,
  };
};

export const setFavorites = (array) => {
  return {
    type: SET_FAVORITES,
    payload: array,
  };
};

export const setCart = (array) => {
  return {
    type: SET_CART,
    payload: array,
  };
};

export const addCartOrder = (cartOrdersArray) => {
  return { type: ADD_CART_ORDER, payload: cartOrdersArray };
};

//unification, I can use as removeFrom['cart']()
export const removeFrom = {
  favorites: removeFromFavoritesAction,
  cart: removeFromCartAction,
};

export const addTo = {
  favorites: addToFavoritesAction,
  cart: addToCartAction,
};

export const setField = {
  favorites: setFavorites,
  cart: setCart,
};
