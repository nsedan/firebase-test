import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import classes from "../ExpenseTracker.module.css";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? classes.minus : classes.plus}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className={classes.deleteBtn}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
