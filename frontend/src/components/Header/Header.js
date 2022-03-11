import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <ul>
        {user ? <li>Merhaba , {user.username}!</li> : null}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="songs/">Songs</Link>
        </li>
        <li>Contact Us</li>
        {user ? (
          <li onClick={logoutUser}>Logout</li>
        ) : (
          <>
            <li>
              <Link to="/sign-in/">Sign In</Link>
            </li>
            <li>
              <Link to="/register/">Register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
