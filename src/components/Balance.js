import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount); 

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const totalFormatted = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const sign = total < 0 ? '-' : '';

    const totalAbs = totalFormatted.substring(0, 1) === '-' ? totalFormatted.substring(1) : totalFormatted;

    return (
        <>
            <h4>YOUR BALANCE</h4>
            <h2>{sign}$ {totalAbs}</h2>
        </>
    )
}
