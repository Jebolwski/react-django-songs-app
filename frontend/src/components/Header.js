import React, {useContext} from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
            {user ? ( <Redirect to={"/"}>fds</Redirect>
            ): (
                <li><Link to="/login" >Home</Link></li> 
            )}
            {user ? (
                
                 <p  onClick={logoutUser}>Logout</p>
            ): (
                <li><Link to="/login" >Login</Link></li> 
            )}
           
            {user &&   <p>Hello {user.username}</p>}
           {user ? null : <li><Link to="/register/">Register</Link></li>}
           <br />
        </div>
    )
}

export default Header
