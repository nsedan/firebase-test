import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="mt-5">
        <Link className="btn btn-secondary btn-block" to="/customers">
          Customers
        </Link>
        <Link className="btn btn-secondary btn-block" to="/expense-tracker">
          Expense Tracker
        </Link>
      </div>
    </>
  );
};

export default Home;
