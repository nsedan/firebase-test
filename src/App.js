import { BrowserRouter as Router, Route } from "react-router-dom";
import Todo from "./components/taskify/Todo";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Route path="/" exact component={Home} />
        <Route path="/taskify" exact component={Todo} />
      </div>
    </Router>
  );
}

export default App;
