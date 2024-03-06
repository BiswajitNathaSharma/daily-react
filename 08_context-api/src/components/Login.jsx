import React, { useContext, useState } from 'react';
import UserContext from '../context/userContext';


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

    function handelSubmit(e) {
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            <h2>Login</h2>

            <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder='username' 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}/> <br /> <br />

            <input 
            type="text" 
            name="password" 
            id="password" 
            placeholder='password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>

            <button onClick={handelSubmit}>submit</button>
        </div>
    )
}

export default Login
