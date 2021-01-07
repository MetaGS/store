import { useEffect, createContext, useContext, useReducer, useState } from 'react';

const initialStateDefault = {
    wideSearch: false,
    photos: [],
};

const initialContext = {
    state: {},
    dispatch: () => {

    }
}

export const Context = createContext(initialContext);

const useContextWithReducer = (initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState = initialStateDefault);
    console.log('%c State inside useContextWith:', 'color: red; font-weight: 600', state)
    console.log('useContextReducer')
    return [state, dispatch];



}


export default useContextWithReducer;


const reducer = (state, action) => {
    switch (action.type) {
        case 'WIDE_SEARCH':
            return { ...state, wideSearch: true };
        case 'NORMAL_SEARCH':
            return { ...state, wideSearch: false };
        case 'ADD_PHOTOS':
            return { ...state, photos: action.payload }
        default:
            return state;
    }
}

export const WIDE_SEARCH = 'WIDE_SEARCH';
export const NORMAL_SEARCH = 'NORMAL_SEARCH';
export const ADD_PHOTOS = 'ADD_PHOTOS';