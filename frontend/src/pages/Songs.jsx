import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import Song from "../components/Song";
import Pagination from "../components/Pagination";
const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  let songsPerPage = 2;
  let { authTokens, getSongs, songs } = useContext(AuthContext);

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const songs1 = songs.slice(indexOfFirstSong, indexOfLastSong);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div>
      <ul>
        <h3>Your Songs</h3>
        <br />
        <Link to="/add-song/">
          <button className="btn btn-outline-dark">Add Song</button>
        </Link>
        {songs ? (
          songs1.map((song) => <Song key={song.id} song={song} />)
        ) : (
          <h3>You dont have any songs</h3>
        )}
        <Pagination
          songsPerPage={songsPerPage}
          totalSongs={songs.length}
          paginate={paginate}
        />
      </ul>
    </div>
  );
};

export default HomePage;
