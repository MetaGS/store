import {
  SIGN_OUT,
  SIGN_IN,
  ADD_PHOTOS,
  NORMAL_SEARCH,
  WIDE_SEARCH,
  ADD_PRODUCTS,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case WIDE_SEARCH:
      return { ...state, wideSearch: true };
    case NORMAL_SEARCH:
      return { ...state, wideSearch: false };
    case ADD_PRODUCTS:
      return { ...state, products: action.payload };
    case SIGN_IN:
      return { ...state, user: action.payload, userSignedIn: true };
    case SIGN_OUT:
      return { ...state, user: null, userSignedIn: false };
    default:
      return state;
  }
};
