import React from "react";
import "./Header.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/mobiles">Mobiles</Link>
      </nav>
    </div>
  );
};

export default Header;
