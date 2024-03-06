import React from 'react'
import { useState, useEffect } from 'react'
function Github() {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch('https://api.github.com/users/biswajitnathasharma')
    .then(response => response.json())
      .then(data =>
        {console.log(data);
        setData(data)})
  }, [])
  
  return (
    <div>
      <h1>Github: {data.id}</h1>
      <img className='w-20 h-20' src={data.avatar_url
} alt="" />
    </div>
  )
}

export default Github
