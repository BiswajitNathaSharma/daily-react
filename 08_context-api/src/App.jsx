import "./App.css"
import React from 'react';

import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContext from "./contexts/UserContext";
import UserContextProvider from "./contexts/UserContextProvider";



function App() {
  const UserContextProvider = ({childern})=>{
    const [user, setUser] = React.useState("priya")
    return(
    <UserContext.Provider value = {{user,setUser}}>
    {childern}
    </UserContext.Provider>
)}

  return (
 <UserContextProvider >
   <h1>hi</h1>
   <Login/>
   <Profile/>
 </UserContextProvider>
  
  )
}

export default App
