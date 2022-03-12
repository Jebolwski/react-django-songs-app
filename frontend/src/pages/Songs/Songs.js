import React, { useEffect, useState, useContext } from "react";
import Song from "../../components/Song/Song";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
const Songs = () => {
  const [songs, setSongs] = useState([]);
  let { user, authTokens, logoutUser } = useContext(AuthContext);
  let getSongs = async () => {
    let response = await fetch("/songs/");
    let data = await response.json();

    if (response.status == 200) {
      setSongs(data);
    } else {
      logoutUser();
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div>
      {user.username == "Yönetici" ? (
        <Link to="/add-song/">Şarkı Ekle<br/></Link> 
      ) : null}
      {songs.map((song, index) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
};
export default Songs;
