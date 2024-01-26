import React, {useState, useContext} from 'react'
import UserContext from '../contexts/UserContext'


function Login() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const {setUser} = useContext(UserContext)
    
    const handelSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>logIn</h2>
        <input type="text" 
        placeholder="username"
        value={username} 
        onChange={(e)= setUsername(e.target.value)}
        />
        <br />
        <input type="text"
        placeholder="password"
        value={password} 
        onChange={(e)= setPassword(e.target.value)} 
        /> <br />
        <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login
