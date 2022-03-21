import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Songs from "../pages/Songs";
import ReccomendedSongs from "./ReccomendedSongs";
const HomePage = () => {
  let [songs, setSongs] = useState([]);
  let { authTokens, logoutUser, user } = useContext(AuthContext);

  useEffect(() => {
    getSongs();
  }, []);

  let getSongs = async () => {
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
    <>
      <div className="col-8 offset-4 pt-0">
        <h5>Reccomended Songs</h5>
        <ReccomendedSongs key={songs.id} />
      </div>
      {user ? (
        <div className="col-4 h-100">
          <h4>Your Hits</h4>
          <Songs />
        </div>
      ) : (
        <div className="col-4 h-100">
          <h5>Login to see your hits...</h5>
        </div>
      )}
    </>
  );
};

export default HomePage;
