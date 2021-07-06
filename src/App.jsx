import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Todo from "./apps/customers/Todo";
import Home from "./apps/home/Home";
import ExpenseTracker from "./apps/expense-tracker/ExpenseTracker";

function App() {
  return (
    <div className="container mt-5">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/customers" exact>
          <Todo />
        </Route>
        <Route path="/expense-tracker" exact>
          <ExpenseTracker />
        </Route>
        <Route path="/*" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
