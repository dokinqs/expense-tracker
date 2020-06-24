import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            {transaction.text} <span>{sign}$ {Math.abs(transaction.amount).toFixed(2)}</span>
        </li>
    )
}
