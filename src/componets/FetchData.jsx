import React from 'react'
import { useState, useEffect } from 'react'

function FetchData({id="21"}) {
    const [data, setData] = useState([]);
    
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => setData(json));
        }, []); 
  return (
    <div>
      {data.map(post => (
                <p key={post.id}>{post.title}</p>
            ))}
    </div>
  )
}

export default FetchData
