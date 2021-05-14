import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <ul className="mt-5">
        <Link className="btn btn-secondary btn-block" to="/taskify">
          Taskify
        </Link>
        <Link className="btn btn-secondary btn-block" to="/quizzer">
          Quizzer
        </Link>
      </ul>
    </div>
  );
};

export default Home;
