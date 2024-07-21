import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="text-3xl font-bold justify-center items-center flex">Home page</div>

      <div className="anchors grid">
        <Link to="/conference">Conference</Link>
        <Link to="/login">LogIn</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
