import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>INCOME</h4>
                    <p className="money plus">+$67</p>
                </div>
                <div>
                    <h4>EXPENSE</h4>
                    <p className="money minus">-$42</p>
                </div>
            </div>
        </div>
    )
}
