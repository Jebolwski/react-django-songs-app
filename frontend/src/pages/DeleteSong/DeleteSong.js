import React, { useState, useEffect,useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
const DeleteSong = () => {
  let navigate = useNavigate();
  let {authTokens} = useContext(AuthContext)
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
        "Authorization": "Bearer" + String(authTokens?.access),
      },
    });
    navigate("/reccomended-songs");
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
