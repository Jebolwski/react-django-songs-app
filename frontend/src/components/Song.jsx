import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const HomePage = ({ song, getSongs }) => {
  let { authTokens } = useContext(AuthContext);
  let navigate = useNavigate();
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
    if (response.status === 200) {
      getSongs();
    }
  };
  let end_of_url = song.url.slice(song.url.length - 11, song.url.length);
  return (
    <div>
      <Link to={`/song/${song.id}`} key={song.id}>
        {song.name}
      </Link>
      , {song.artist}
      <h5 onClick={deleteSong}>Delete</h5>
      <iframe
        width="220"
        height="140"
        src={`https://www.youtube.com/embed/${end_of_url}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br />
      <Link to={`/song/${song.id}/edit/`}>Edit</Link>
    </div>
  );
};

export default HomePage;
