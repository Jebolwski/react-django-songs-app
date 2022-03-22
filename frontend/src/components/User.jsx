import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const User = ({ userstatus, deleteUser }) => {
  let { authTokens } = useContext(AuthContext);
  const [status, setStatus] = useState();
  let save = async (e) => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/user-status/${userstatus.user}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          username: userstatus.username,
          email: userstatus.email,
          user: userstatus.user,
          status: status,
        }),
      }
    );
    let data1 = JSON.stringify({
      username: userstatus.username,
      email: userstatus.email,
      user: userstatus.user,
      status: status,
    });
    console.log(data1);
  };
  let deleteit = () => {
    deleteUser(userstatus.user);
  };
  return (
    <>
      <tr key={userstatus.id}>
        <td>{userstatus.username}</td>
        <td>{userstatus.email}</td>
        <td>
          <select
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option>Current ({userstatus.status})</option>
            <option value="Approved">Approve</option>
            <option value="Not Approved">Not Approved</option>
            <option value="On Wait">Wait</option>
            <option value="Blocked">Block</option>
          </select>
        </td>
        <td>
          <button onClick={deleteit} className="btn btn-outline-danger">
            Delete
          </button>
        </td>
        <td>
          <button onClick={save} className="btn btn-outline-success">
            Save
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
