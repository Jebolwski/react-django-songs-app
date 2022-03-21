import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const User = ({ userstatus }) => {
  let { authTokens } = useContext(AuthContext);
  const [status, setStatus] = useState([]);
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
          status: status,
        }),
      }
    );
  };
  return (
    <>
      <tr key={userstatus.id}>
        <td>{userstatus.user}</td>
        <td>{userstatus.user}</td>
        <td>
          <select
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option>Current ({userstatus.status})</option>
            <option value="Approve">Approve</option>
            <option value="Not Approve">Not Approved</option>
            <option value="On Wait">Wait</option>
            <option value="Blocked">Block</option>
          </select>
        </td>
        <td>
          <button onClick={save} className="btn btn-outline-danger">
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
