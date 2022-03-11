import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);

  return (
    <>
      <h4>Register</h4>
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
          setPassword1(e.target.value);
        }}
        name="password1"
      />
      <br />
      <br />
      <span>Password (Again)</span>
      <br />
      <input
        type="password"
        onChange={(e) => {
          setPassword2(e.target.value);
        }}
        name="password2"
      />
      <br />
      <br />
      <button>Rgister</button>
    </>
  );
};
export default Register;
