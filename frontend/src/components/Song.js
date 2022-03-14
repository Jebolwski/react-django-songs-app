import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const HomePage = ({song}) => {

    return (
        <div>
            <Link to = {`/song/${song.id}`} key={song.id}> {song.name} </Link> , {song.artist}
        </div>
    )
}

export default HomePage
