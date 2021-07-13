import React from "react";
import GlobalProvider from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import classes from "./ExpenseTracker.module.css";

const ExpenseTracker = () => {
  return (
    <div className={classes.expenseTracker}>
      <Header />
      <GlobalProvider>
        <div className={classes.container}>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
};

export default ExpenseTracker;
