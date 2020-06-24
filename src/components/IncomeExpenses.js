import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount); 

    const income = amounts.filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const expense = (
        amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>INCOME</h4>
                    <p className="money plus">+{income}</p>
                </div>
                <div>
                    <h4>EXPENSE</h4>
                    <p className="money minus">-${expense}</p>
                </div>
            </div>
        </div>
    )
}
