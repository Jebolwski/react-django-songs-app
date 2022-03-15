import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Song from "../components/Song";
const HomePage = () => {
  let [songs, setSongs] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/songs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setSongs(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default HomePage;
