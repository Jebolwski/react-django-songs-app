import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const SongDetail = () => {
  const [song, setSong] = useState([]);

  let { id } = useParams();
  let { authTokens } = useContext(AuthContext);
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
  return (
    <div>
      <h4>Song Detail</h4>
      <p>{song.name}</p>
      <p>{song.artist}</p>
      <p>{song.duration}</p>
    </div>
  );
};

export default SongDetail;
