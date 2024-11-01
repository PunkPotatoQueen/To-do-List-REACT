import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className="search">
        <h2>Search</h2>
        <input placeholder="Search your to-do..." type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
    </div>
  )
}

export default Search