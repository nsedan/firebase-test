import React from "react";
import { Link } from "react-router-dom";

const Quizzer = () => {
  return (
    <div>
      <h1>Quizzer</h1>
      <Link className="btn btn-secondary btn-block mt-5" to="/">
        Home
      </Link>
    </div>
  );
};

export default Quizzer;
