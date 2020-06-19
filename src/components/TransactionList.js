import React from 'react'

export const TransactionList = () => {
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                <li className="plus">
                    <button className="delete-btn">x</button>
                    Piggy bank <span>+$63</span>
                </li>
                <li className="minus">
                    <button className="delete-btn">x</button>
                    Lost me wallet <span>-$42</span>
                </li>
                <li className="plus">
                    <button className="delete-btn">x</button>
                    Found on ground <span>+$1</span>
                </li>
                <li className="plus">
                    <button className="delete-btn">x</button>
                    Lottery jackpot <span>+$3</span>
                </li>
            </ul>
        </>
    )
}
