import React,{useEffect,useState} from "react";
import Song from "../../components/Song/Song";
import { Link } from "react-router-dom";
const Songs = () => {

  const [songs,setSongs] = useState([])

  let getSongs = async () => {
    let response = await fetch("/songs/")
    let data = await response.json()
    setSongs(data)
    console.log(data);
  }


  useEffect(()=>{
    getSongs()
  },[])

  return(
  <div>
    
    <Link to="/add-song/">Şarkı Ekle</Link>
    {songs.map((song,index)=>(
      <Song key={song.id} song={song}  />
    ))}
  </div>
  )
};
export default Songs;
