import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./apps/home/NavBar";
import Home from "./apps/home/Home";
import Customers from "./apps/customers/Customers";
import ExpenseTracker from "./apps/expense-tracker/ExpenseTracker";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/customers" exact>
          <Customers />
        </Route>
        <Route path="/expense-tracker" exact>
          <ExpenseTracker />
        </Route>
        <Route path="/*" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
