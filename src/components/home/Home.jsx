import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Link className="btn btn-secondary btn-block mt-5" to="/taskify">Taskify</Link>
    </div>
  );
};

export default Home;
