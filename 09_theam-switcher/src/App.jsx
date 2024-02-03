import React, { useState, useEffect} from 'react';
import './App.css';
import { ThemeProvider } from './contexts/Theme';
import Card from './components/card';
import ThemeBtn from './components/ThemeBtn';
import UserInput from './components/UserInput';
import useProfileInfo from './Hooks/useProfileInfo';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const lightMode = () => {
    setThemeMode('light');
  };
  const darkMode = () => {
    setThemeMode('dark');
  };
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
  const [username, setUsername] = useState('github');
  const { profileInfo, error } = useProfileInfo(username);

  const handleSubmit = (submittedUrl) => {
    setUsername(submittedUrl);
  };

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn themesMode={themeMode} />
          </div>
          <UserInput onUrlSubmit={handleSubmit} />
          {error ? (
            <div className='w-full max-w-sm mx-auto'>
                 <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src= "https://avatars.githubusercontent.com/u/9919?v=4" alt="user image" />
            </a>
            <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {error}
                    </h5> 
            </div>
        </div>
            </div>
          ) : (
            <div className="w-full max-w-sm mx-auto">
              <Card
                imgSrc={profileInfo.avatar_url}
                userName={profileInfo.login}
                gitlink={profileInfo.html_url}
                followers={profileInfo.followers}
                bio={profileInfo.bio}
              />
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
