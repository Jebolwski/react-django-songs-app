import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import User from "../components/User";
const Users = () => {
  const [users, setUsers] = useState([]);

  let { authTokens } = useContext(AuthContext);

  useEffect(async () => {
    let response = await fetch("http://127.0.0.1:8000/api/all-user-status/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(authTokens?.access),
      },
    });
    let data = await response.json();
    setUsers(data);
  }, []);

  let deleteUser = async (id) => {
    let response = await fetch(`http://127.0.0.1:8000/api/delete-user/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    if (response.status === 200) {
      setUsers(
        users.filter((userstatus) => {
          return userstatus.user !== id;
        })
      );
    }
  };
  return (
    <>
      <table className="table text-center table-striped table-hover">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((userstatus, index) => (
              <User
                key={userstatus.id}
                userstatus={userstatus}
                deleteUser={deleteUser}
              />
            ))
          ) : (
            <h3>No users</h3>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Users;
