import React, { useState } from 'react'

function Search() {

    const [search, setSearch] = useState("");
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
  return (
    <div>
      <h1>search Names</h1>
      <input type="text" placeholder='search names' value={search} onChange={(e)=> setSearch(e.target.value)} />

      <ul>
        {names.filter((name) => name.toLowerCase().includes(search.toLowerCase())).map((name, i)=>(
            <li key={i}>{name}</li>
        ))}
        
      </ul>
    </div>
  )
}

export default Search
