import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      {user ? null : (
        <li>
          <Link to="/">Home</Link>
        </li>
      )}
      {user ? (
        <li>
          <Link to="/songs/">Songs</Link>
        </li>
      ) : null}
      {user ? (
        <li onClick={logoutUser}>Logout</li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}

      {user && <p>Hello , {user.username}</p>}
      {user ? null : (
        <li>
          <Link to="/register/">Register</Link>
        </li>
      )}
      <br />
    </div>
  );
};

export default Header;
