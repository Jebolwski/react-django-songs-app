import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="songs/">Songs</Link>
        </li>
        <li>Contact Us</li>
        <li>
          <Link to="/sign-in/">Sign In</Link>
        </li>
        <li>
          <Link to="/register/">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
