import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import Song from "../components/Song";
import Pagination from "../components/Pagination";
const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  let { authTokens, logoutUser } = useContext(AuthContext);

  let [songs, setSongs] = useState([]);

  let songsPerPage = 2;

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const songs1 = songs.slice(indexOfFirstSong, indexOfLastSong);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(async () => {
    let response = await fetch("http://127.0.0.1:8000/api/songs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens?.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setSongs(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  }, []);

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
        <h3>Your Songs</h3>
        <br />
        <Link to="/add-song/">
          <button className="btn btn-outline-dark">Add Song</button>
        </Link>
        {songs ? (
          songs1.map((song) => (
            <Song key={song.id} song={song} deleteSong={deleteSong} />
          ))
        ) : (
          <h3>You dont have any songs</h3>
        )}
        <Pagination
          songsPerPage={songsPerPage}
          totalSongs={songs.length}
          paginate={paginate}
          setSongs={setSongs}
          songs={songs}
        />
      </ul>
    </div>
  );
};

export default HomePage;
