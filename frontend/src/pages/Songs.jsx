import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import Song from "../components/Song";
const HomePage = () => {
  let [songs, setSongs] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, [songs]);

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
      <ul>
        <h3>Your Songs</h3>
        <br />
        <Link to="/add-song/">Add Song</Link>
        {songs ? (
          songs.map((song) => <Song key={song.id} song={song} />)
        ) : (
          <h3>You dont have any songs</h3>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
