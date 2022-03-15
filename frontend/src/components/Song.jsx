import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const HomePage = ({ song }) => {
  let { authTokens } = useContext(AuthContext);
  let deleteSong = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/song/${song.id}/delete/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
  };
  let editSong = async (e) => {
    let response = await fetch(
      "http://127.0.0.1:8000/api/song/${song.id}/edit/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          artist: e.target.artist.value,
          name: e.target.name.value,
          duration: e.target.duration.value,
        }),
      }
    );
  };

  return (
    <div>
      <Link to={`/song/${song.id}`} key={song.id}>
        {song.name}
      </Link>
      , {song.artist}
      <h5 onClick={deleteSong}>Delete</h5>
      <Link to={`/song/${song.id}/edit/`}>Edit</Link>
    </div>
  );
};

export default HomePage;
