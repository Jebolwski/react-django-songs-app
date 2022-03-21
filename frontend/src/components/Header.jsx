import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="col-12 p-0 m-0">
      <ul className="d-flex list-unstyled justify-content-evenly bg-dark align-items-center pt-2 pb-2">
        <li>
          <Link to="/" className="text-decoration-none text-white">
            Home
          </Link>
        </li>
        {user ? (
          <li>
            <Link to="/songs/" className="text-decoration-none text-white">
              Songs
            </Link>
          </li>
        ) : null}
        {user && user.is_superuser ? (
          <li>
            <Link to="/all-users/" className="text-decoration-none text-white">
              All Users
            </Link>
          </li>
        ) : null}
        {user ? (
          <li className="text-decoration-none text-white">
            {user && <>Hello , {user.username}</>}
          </li>
        ) : (
          <li className="text-decoration-none text-white">Welcome!</li>
        )}

        {user ? (
          <li
            onClick={logoutUser}
            className="text-decoration-none text-white"
            role="button"
          >
            Logout
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              className="text-decoration-none text-white"
              role="button"
            >
              Login
            </Link>
          </li>
        )}

        {user ? null : (
          <li className="text-decoration-none text-white" role="button">
            <Link to="/register/" className="text-decoration-none text-white">
              Register
            </Link>
          </li>
        )}
      </ul>
      <br />
    </div>
  );
};

export default Header;
