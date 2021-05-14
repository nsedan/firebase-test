import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Todo from "./apps/customers/Todo";
import Home from "./apps/home/Home";
import Quizzer from "./apps/quizzer/Quizzer";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Route path="/" exact component={Home} />
        <Route path="/customers" exact component={Todo} />
        <Route path="/quizzer" exact component={Quizzer} />
      </div>
    </Router>
  );
}

export default App;
