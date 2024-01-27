import { useState, useEffect } from 'react';

const useProfileInfo = (username) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('No such User on GitHub');
        }
        const data = await response.json();
        setProfileInfo(data);
        setError(null); // Reset error state
      } catch (error) {
        setError(error.message); // Set error message
      }
    };

    fetchProfileInfo();

   
    return () => setProfileInfo({});
  }, [username]);

  return { profileInfo, error };
};

export default useProfileInfo;
