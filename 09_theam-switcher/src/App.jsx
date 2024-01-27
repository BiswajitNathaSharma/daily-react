import { useState,useEffect } from 'react';
import './App.css'
import { ThemeProvider } from "./contexts/Theme";
import Card from './components/card';
import ThemeBtn from './components/ThemeBtn';
import UserInput from './components/UserInput';
import useProfileInfo from './Hooks/useProfileInfo';
function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightMode = () =>{
    setThemeMode("light")
  }
  const darkMode = () =>{
    setThemeMode("dark")
  }

  useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  const [url, setUrl] = useState("https://api.github.com/users/github")
  const profileInfo = useProfileInfo(url)
  
  const handleSubmit = (submittedUrl) =>{
    setUrl(submittedUrl);
  };
  return (

<ThemeProvider value={{themeMode, darkMode, lightMode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>
                  <UserInput onUrlSubmit = {handleSubmit}/>  

                    <div className="w-full max-w-sm mx-auto">
                        <Card 
                        imgSrc={profileInfo.avatar_url}
                        userName={profileInfo.login}
                        gitlink={profileInfo.html_url}
                        followers={profileInfo.followers}
                        bio={profileInfo.bio}
                        />
                      
                       
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
