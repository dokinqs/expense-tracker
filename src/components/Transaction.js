import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '+' : '-';

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        </li>
    )
}
