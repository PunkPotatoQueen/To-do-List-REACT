import React from 'react'

const Filter = ({filter, setFilter, sort, setSort}) => {
  return (
    <div class name='filter'>
        <h2>Search by:</h2>
        <div className='filter-options'>
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
            <div>
                <p>Alphabetic order</p>
                <button onClick={() => setSort('Ascending')}>Ascending</button>
                <button onClick={() => setSort('Descending')}>Descending</button>
            </div>
        </div>
    </div>
  )
}

export default Filter