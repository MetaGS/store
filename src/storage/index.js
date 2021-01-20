import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

export const ContextINNER = createContext([]);



const initialState = {
    user: null,
    userSignedIn: false,
}




export const StorageInitialize = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContextINNER.Provider value={[state, dispatch]}>
            {children};
        </ContextINNER.Provider>
    )
}


const useStorage = () => {
    return useContext(ContextINNER);
}


export default useStorage;
