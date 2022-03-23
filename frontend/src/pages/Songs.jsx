import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import Song from "../components/Song";
const HomePage = () => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  let [songs, setSongs] = useState([]);
  let page_num = 1;
  document.addEventListener("scroll", function (e) {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    // When the user is [modifier]px from the bottom, fire the event.
    let modifier = 200;
    if (currentScroll + modifier > documentHeight) {
      page_num = page_num + 1;
      console.log("You are at the bottom!");
      console.log(page_num);
    }
  });
  useEffect(async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/songs/?page=${page_num}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens?.access),
        },
      }
    );
    let data = await response.json();

    if (response.status === 200) {
      setSongs(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  }, [page_num]);

  let deleteSong = async (id) => {
    let response = await fetch(`http://127.0.0.1:8000/api/song/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    if (response.status === 200) {
      setSongs(
        songs.filter((song) => {
          return song.id !== id;
        })
      );
    }
  };

  return (
    <div>
      <ul>
        <br />
        <Link to="/add-song/">
          <button className="btn btn-outline-dark">Add Song</button>
        </Link>
        {songs ? (
          songs.map((song) => (
            <Song key={song.id} song={song} deleteSong={deleteSong} />
          ))
        ) : (
          <h3>You dont have any songs</h3>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
