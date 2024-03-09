import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useState, useEffect } from 'react'
import  Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
  function App() {
    const [themeMode, setThemeMode] = useState("light")

    const lightMode = ()=>{
      setThemeMode("light")
    }
    const darkMode = ()=>{
      setThemeMode("dark")
    }
    
    useEffect(() => {
      const html = document.querySelector("html")
      html.classList.remove("light", "dark")
      html.classList.add(themeMode)
    }, [themeMode])
    
  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
      <div className='h-full min-w-full bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700' >
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full">
          <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
              <ThemeBtn/>
          </div>
          
          
          <div className="w-full max-w-sm mx-auto h-full">
              <Card/>

          </div>
        </div>
      </div></div>
    </ThemeProvider>
  )
}

export default App
