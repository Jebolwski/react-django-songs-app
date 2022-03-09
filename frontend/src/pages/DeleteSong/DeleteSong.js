import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteSong = () => {
  let navigate = useNavigate();

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

  let deleteSong = async () => {
    fetch(`/songs/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/songs");
  };

  let Delete = () => {
    deleteSong();
  };

  return (
    <div>
      <div>
        <h4>Are you sure that you want delete song names '{song.name}' ?</h4>
        <button onClick={Delete}>Delete</button>
      </div>
    </div>
  );
};
export default DeleteSong;
