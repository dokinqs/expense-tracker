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

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) { 
        dispatch({ 
            type: 'DELETE_TRANSACTION', 
            payload: id
        }); 
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>)
}