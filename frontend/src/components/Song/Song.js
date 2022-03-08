import React from "react";
import { Link } from "react-router-dom";

const Song = ({song}) => {
  return(
  <div>
    
    <h4>Şarı Adı :{song.name}</h4>
    <h4>Uzunluk :{song.duration}</h4>
    <h4>Tür :{song.genres}</h4>
    <h4>Artist :{song.artist}</h4>
    <Link to={`/edit-song/${song.id}`} match={song.id}>Şarkıyı Düzenle</Link>
    <p>---------------</p>
  </div>
  )
}
export default Song

