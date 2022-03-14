import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext';
import Song from "../components/Song"
const HomePage = () => {
    let [songs, setSongs] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(()=> {
        getNotes()
    }, [])


    let getNotes = async() =>{
        let response = await fetch('http://127.0.0.1:8000/api/songs/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setSongs(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
        
    }

    return (
        <div>
            <p>You are logged to the home page!</p>


            <ul>
                {songs.map(song => (
                    <Song key={song.id} song={song} />
                ))}
            </ul>
        </div>
    )
}

export default HomePage
