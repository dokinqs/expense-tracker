import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        { id: 1, text: 'Pad Thai', amount: -14 },
        { id: 2, text: 'Hustlin', amount: 80 },
        { id: 3, text: 'Oh no', amount: -50 },
        { id: 4, text: 'Yay', amount: 30 }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>)
}