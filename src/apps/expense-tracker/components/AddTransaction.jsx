import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            className="form-control"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">
            Amount <br />
            <small>(negative - expense, positive - income)</small>
          </label>
          <input
            className="form-control"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn btn-dark btn-block">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
