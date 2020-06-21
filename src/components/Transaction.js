import React from 'react'

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '+' : '-';

    return (
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
            <button className="delete-btn">x</button>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        </li>
    )
}
