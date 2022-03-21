import React, { useEffect, useState } from "react";
import Song from "../components/Song";
const ReccomendedSongs = () => {
  const [songs, setSongs] = useState([]);
  let Songs = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/reccomended-songs/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = await response.json();
    setSongs(data);
  };
  useEffect(() => {
    Songs();
  }, []);
  return (
    <div>
      {songs ? (
        songs.map((song) => (
          <div key={song.id}>
            {song.name}, {song.artist}
            {song.url ? (
              <iframe
                width="220"
                height="140"
                src={`https://www.youtube.com/embed/${song.url.slice(
                  song.url.length - 11,
                  song.url.length
                )}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                allowFullScreen
              ></iframe>
            ) : (
              <p>No video url</p>
            )}
            <br />
            <p>{song.duration}</p>
          </div>
        ))
      ) : (
        <h3>You dont have any songs</h3>
      )}
    </div>
  );
};

export default ReccomendedSongs;
