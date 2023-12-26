import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import About from "./About";

const Header = () => {
  return (
    <div className="header">
      STOP PROCRASTINATING STAY ACTIVE
      <nav>
        <Link to={"/"} className="list-items">
          Home
        </Link>
        <Link to={"/about"} className="list-items">
          About
        </Link>
        <Link to={"/user/:id"} className="list-items">
          User Details
        </Link>
        <Link to={"/login"} className="list-items">
          Log Out
        </Link>
      </nav>
    </div>
  );
};

export default Header;
