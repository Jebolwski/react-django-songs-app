import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddSong = () => {
  let navigate = useNavigate();

  let { authTokens } = useContext(AuthContext);

  let addSong = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/add-song/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        name: e.target.name.value,
        artist: e.target.artist.value,
        duration: e.target.duration.value,
        url: e.target.url.value,
      }),
    });
    if (response.status == 200) {
      navigate("/songs");
    } else {
      console.log(response.status);
      alert("Wot!");
    }
  };

  return (
    <div>
      <h4>Add a Song</h4>
      <form onSubmit={addSong}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <br />
        <input type="text" name="artist" placeholder="Artist" />
        <br />
        <br />
        <input type="text" name="duration" placeholder="Duration" />
        <br />
        <br />
        <input type="text" name="url" placeholder="Song's URL" />
        <br />
        <br />
        <input type="submit" value="Add" className="btn btn-outline-dark" />
      </form>
    </div>
  );
};

export default AddSong;
