import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import classes from "../ExpenseTracker.module.css";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className={classes.expContainer}>
      <div>
        <h4>Income</h4>
        <p className={`${classes.sums} ${classes.plus}`}>+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className={`${classes.sums} ${classes.minus}`}>-${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
