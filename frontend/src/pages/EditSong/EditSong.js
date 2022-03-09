import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditSong = () => {
  const { id } = useParams();
  const [song, setSong] = useState([]);

  const [artist, setArtist] = useState(null);
  const [duration, setDuration] = useState(null);
  const [genre, setGenre] = useState(null);
  const [songname, setSongname] = useState(null);

  let getSong = async () => {
    let response = await fetch(`/songs/${id}/`);
    let data = await response.json();
    setSong(data);
  };

  useEffect(() => {
    getSong();
  }, []);

  let updateSong = async () => {
    fetch(`/songs/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artist: artist,
        duration: duration,
        name: songname,
        genres: genre,
      }),
    });
    let body1 = JSON.stringify(artist, songname, duration, genre);
    console.log(body1);
  };

  let navigate = useNavigate();

  let Update = () => {
    updateSong();
    navigate("/songs");
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
          defaultValue={song.name}
        ></textarea>
        <br />
        <br />
        <span>Duration (Seconds)</span>
        <br />
        <textarea
          onChange={(e) => {
            setDuration(e.target.value);
          }}
          defaultValue={song.duration}
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
          defaultValue={song.artist}
        ></textarea>
        <p>---------------</p>
      </div>
      <button onClick={Update}>Update Song</button>
    </div>
  );
};
export default EditSong;
