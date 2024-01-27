import { useState,useEffect } from "react";

function useProfileInfo(username) {
    const [ProfileInfo, setProfileInfo] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(`https://api.github.com/users/${username}`);
              
              const data = await response.json();
              setProfileInfo(data);
              console.log(data)
            } catch (error) {
              
              console.error('Error fetching data:', error);
            }
          };
      
          if (username) {
            fetchData();
          }
    
    }, [username])
    
    return ProfileInfo
}
export default useProfileInfo;