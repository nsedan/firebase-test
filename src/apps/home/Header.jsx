import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.navBar}>
      <Link className={classes.navLink} to="/customers">
        Customers
      </Link>
      <Link className={classes.navLink} to="/expense-tracker">
        Expense Tracker
      </Link>
    </div>
  );
};

export default Header;
