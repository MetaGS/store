import {
  SIGN_OUT,
  SIGN_IN,
  ADD_PHOTOS,
  NORMAL_SEARCH,
  WIDE_SEARCH,
  ADD_PRODUCTS,
  ADD_TO_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVORITES,
  SET_CART,
  SET_FAVORITES,
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

    case ADD_TO_CART:
      let newCart = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      return { ...state, cart: [...state.cart, ...newCart] };

    case ADD_TO_FAVORITES:
      console.log(action.payload);
      // throw Error("Reducer true error");
      let newFavorites = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      return { ...state, favorites: [...state.favorites, ...newFavorites] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((item) => {
          return item !== action.payload;
        }),
      };
    case SET_FAVORITES:
      console.log(action.payload);
      return {
        ...state,
        favorites: action.payload,
      };
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};
