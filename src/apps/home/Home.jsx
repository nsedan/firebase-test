import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <h1>Welcome</h1>
        <Link className={classes.btn} to="/customers">
          Customers
        </Link>
        <Link className={classes.btn} to="/expense-tracker">
          Expense Tracker
        </Link>
      </div>
    </>
  );
};

export default Home;
