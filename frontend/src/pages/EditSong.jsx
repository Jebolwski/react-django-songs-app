import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const EditSong = () => {
  let { authTokens, getSongs } = useContext(AuthContext);
  let navigate = useNavigate();
  const [song, setSong] = useState([]);

  let { id } = useParams();
  let Song = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/song/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    console.log(data);
    setSong(data);
  };

  useEffect(() => {
    Song();
  }, []);

  let editSong = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://127.0.0.1:8000/api/song/${id}/edit/`, {
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
    });
    if (response.status === 200) {
      navigate("/songs");
    } else {
      alert("Error!");
    }
  };
  return (
    <div>
      <h4>Edit the Song</h4>
      <form onSubmit={editSong}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={song.name}
        />
        <br />
        <br />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          defaultValue={song.artist}
        />
        <br />
        <br />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          defaultValue={song.duration}
        />
        <br />
        <br />
        <input type="submit" value="Edit" />
      </form>
    </div>
  );
};

export default EditSong;
