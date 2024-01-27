import { useState,useEffect } from "react";

function useProfileInfo(url) {
    const [ProfileInfo, setProfileInfo] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const data = await response.json();
              setProfileInfo(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          if (url) {
            fetchData();
          }
    
    }, [url])
    return ProfileInfo
}
export default useProfileInfo;