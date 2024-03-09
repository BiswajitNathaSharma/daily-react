import { useState, useEffect } from 'react';

function useGitApi(username) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(error => console.error('Error fetching data:', error));
    }, [username]);

    return data;
}

export default useGitApi;
