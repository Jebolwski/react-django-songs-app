import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const RegisterPage = () => {
  let { registerUser } = useContext(AuthContext);

  let register = (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.password1.value) {
      alert("Passwords dont match!");
      console.log("Wrong");
      e.target.password.value = "";
      e.target.password1.value = "";
    } else {
      registerUser(e);
    }
  };

  return (
    <div>
      <form onSubmit={register}>
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
        <input
          type="submit"
          value="Register"
          className="btn btn-outline-dark"
        />
      </form>
    </div>
  );
};

export default RegisterPage;
