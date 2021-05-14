import React from "react";
import { useContext } from "react";
import Transaction from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length ? (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <small>Nothing to show.</small>
        )}
      </ul>
    </>
  );
};

export default TransactionList;
