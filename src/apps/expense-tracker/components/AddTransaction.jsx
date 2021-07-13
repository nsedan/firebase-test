import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import classes from "../ExpenseTracker.module.css";

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
    <div className={classes.form}>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className={classes.inputGroup}>
          <label className={classes.label} htmlFor="text">
            Description
          </label>
          <input
            className={classes.input}
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="amount">
            Amount <br />
            <small>(negative - expense, positive - income)</small>
          </label>
          <input
            className={classes.input}
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className={classes.submitBtn}>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
