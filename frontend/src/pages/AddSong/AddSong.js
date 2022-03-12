import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const AddSong = () => {
  const { id } = useParams();
  const [song, setSong] = useState([]);
  let {authTokens} = useContext(AuthContext)
  const [artist, setArtist] = useState(null);
  const [duration, setDuration] = useState(null);
  const [genre, setGenre] = useState(null);
  const [songname, setSongname] = useState(null);

  let addSong = async () => {
    fetch("/songs/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + String(authTokens?.access),
      },
      body: JSON.stringify({
        artist: artist,
        duration: duration,
        name: songname,
        genres: genre,
      }),
    });
  };

  let navigate = useNavigate();
  let Add = (e) => {
    if (
      artist == null ||
      duration == null ||
      genre == null ||
      songname == null ||
      typeof duration == "number"
    ) {
      e.preventDefault();
    } else {
      addSong();
      navigate("/reccomended-songs/");
    }
  };

  return (
    <div>
      <div>
        <span>Song Name</span>
        <br />
        <textarea
          onChange={(e) => {
            setSongname(e.target.value);
          }}
        ></textarea>
        <br />
        <br />
        <span>Duration (Seconds)</span>
        <br />
        <textarea
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        ></textarea>
        <br />
        <br />
        <span>Genre</span>
        <br />

        <select
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        >
          <option value="default">Select Genre</option>
          <option value="Rock">Rock</option>
          <option value="Rap">Rap</option>
          <option value="Blues">Blues</option>
          <option value="Jazz">Jazz</option>
          <option value="Metal">Metal</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <span>Artist</span>
        <br />
        <textarea
          onChange={(e) => {
            setArtist(e.target.value);
          }}
        ></textarea>
        <p>---------------</p>
      </div>
      <button onClick={Add}>Add Song</button>
    </div>
  );
};
export default AddSong;
