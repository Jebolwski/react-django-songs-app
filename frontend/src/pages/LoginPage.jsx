import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <form method="POST" onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <br />
        <br />
        <input type="password" name="password" placeholder="Enter Password" />
        <br />
        <br />
        <input type="submit" value="Login" className="btn btn-outline-dark" />
      </form>
    </div>
  );
};

export default LoginPage;
