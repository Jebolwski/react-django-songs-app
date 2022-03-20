import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  let { authTokens } = useContext(AuthContext);
  const AllUsers = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/all-users/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(authTokens?.access),
      },
    });
    let data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    AllUsers();
  }, []);
  return (
    <>
      <table className="table text-center table-striped table-hover">
        <thead>
          <tr>
            <th>Kullanıcı Adı</th>
            <th>Email</th>
            <th>Date Joined</th>
            <th>Is Superuser</th>
            <th>Last Login</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => (
              <tr>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.date_joined}</td>
                <td>{user.is_superuser}</td>
                <td>{user.last_login}</td>
              </tr>
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
