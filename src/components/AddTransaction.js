import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    // amount will be a string, convert into number using + or Math.floor
    const onSubmit = (e) => { 
        e.preventDefault(); 

        // TODO: amount commas
        const newTransaction = { 
            id: Math.floor(Math.random() * 100000000), 
            text, 
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>

            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" 
                placeholder="Enter text"
                required value={text} 
                maxLength="40"
                onChange={(e) => setText(e.target.value)}  />
            </div>

            <div className="form-control">
            <label htmlFor="amount">Amount <br />
                (ex: -100 or 100)</label>
            <input type="number" 
                placeholder="Enter amount"
                step="0.01"
                min="-1000000"
                max="1000000"
                required value={amount} 
                onChange={(e) => setAmount(e.target.value)}
            />
            </div>
            
            <button className="btn">Add transaction</button>
        </form>
    </>
    )
}
