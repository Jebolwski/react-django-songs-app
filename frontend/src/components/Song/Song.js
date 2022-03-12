import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Song = ({ song }) => {
  let { user } = useContext(AuthContext);
  return (
    <div>
      <h4>Şarı Adı : {song.name}</h4>
      <h4>Uzunluk : {song.duration}</h4>
      <h4>Tür : {song.genres}</h4>
      <h4>Artist : {song.artist}</h4>
      {user.username == "Yönetici" ? (
        <Link to={`/edit-song/${song.id}`} match={song.id}>
          Update Song<br/>
        </Link>
      ) : null}

      {user.username == "Yönetici" ? (
        <Link to={`/delete-song/${song.id}`} match={song.id}>
          Delete Song
        </Link>
      ) : null}
      <p>---------------</p>
    </div>
  );
};
export default Song;
