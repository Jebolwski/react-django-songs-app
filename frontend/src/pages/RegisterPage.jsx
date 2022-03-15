import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const RegisterPage = () => {
  let password = document.getElementsByClassName("password");
  let password1 = document.getElementsByClassName("password1");
  let { registerUser } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={registerUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <br />
        <br />
        <input type="email" name="email" placeholder="Enter Email" />
        <br />
        <br />
        <input
          type="password"
          name="password"
          className="password"
          placeholder="Enter Password"
        />
        <br />
        <br />
        <input
          type="password"
          name="password1"
          className="password"
          placeholder="Enter Password (Again)"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
