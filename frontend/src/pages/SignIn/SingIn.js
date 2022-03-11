import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const SingIn = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  let { loginUser, authTokens } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <br />
        <br />
        <input type="password" name="password" placeholder="Enter Password" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default SingIn;
