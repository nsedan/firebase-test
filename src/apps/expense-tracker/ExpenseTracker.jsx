import React from "react";
import { Link } from "react-router-dom";
import "./ExpenseTracker.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import GlobalProvider from "./context/GlobalState";

const ExpenseTracker = () => {
  return (
    <div className="tracker">
      <GlobalProvider>
        <Header />
        <div className="tracker-box">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
      <Link className="btn btn-secondary btn-block mt-5" to="/">
        Home
      </Link>
    </div>
  );
};

export default ExpenseTracker;
