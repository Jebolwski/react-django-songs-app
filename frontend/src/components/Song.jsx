import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const HomePage = ({ song, getSongs, setSongs, songs, deleteSong }) => {
  let { authTokens } = useContext(AuthContext);
  let navigate = useNavigate();

  let deleteit = () => {
    deleteSong(song.id);
  };
  let end_of_url = null;
  if (song.url != null) {
    end_of_url = song.url.slice(song.url.length - 11, song.url.length);
  }

  return (
    <div>
      <Link to={`/song/${song.id}`} key={song.id}>
        {song.name}
      </Link>
      , {song.artist}
      <h5 onClick={deleteit} role="button">
        Delete
      </h5>
      {song.url ? (
        <iframe
          width="220"
          height="140"
          src={`https://www.youtube.com/embed/${end_of_url}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No video url</p>
      )}
      <br />
      <Link to={`/song/${song.id}/edit/`}>Edit</Link>
      <p>{song.duration}</p>
    </div>
  );
};

export default HomePage;
