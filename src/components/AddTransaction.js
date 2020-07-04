import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => { 
        e.preventDefault(); 
        const newTransaction = { 
            id: Math.floor(Math.random() * 100000000), 
            text, 
            amount: +amount
        }
        addTransaction(newTransaction);
        setText("");
        setAmount("");
    }

    return (
    <>
        <h3>ADD NEW TRANSACTION</h3>
        <form onSubmit={onSubmit}>

            <div className="form-control">
                <label htmlFor="text">Transaction</label>
                <input type="text" 
                    placeholder="Enter description"
                    required value={text} 
                    maxLength="14"
                    onChange={(e) => setText(e.target.value)}  
                />
            </div>

            <div className="form-control">
                <label htmlFor="amount">Amount <br /></label>
                <input type="number" 
                    placeholder="-100 or 100"
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
