import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingIn = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  let SingIn = async () => {
    fetch("/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
  };

  const Sign_in = () => {
    SingIn();
  };

  return (
    <>
      <h4>Sign In</h4>
      <br />
      <span>Username</span>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        name="username"
      />
      <br />
      <br />
      <span>Password</span>
      <br />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        name="username"
      />
      <br />
      <br />
      <button onClick={Sign_in}>Sign In</button>
    </>
  );
};
export default SingIn;
