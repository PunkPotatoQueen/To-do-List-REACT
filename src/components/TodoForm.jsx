import React from 'react'
import {useState} from 'react'

const TodoForm = ({addTodo}) => {

    const[value, setValue] = useState('')
    const[category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return;
        addTodo(value, category)
        setValue('')
        setCategory('')

    }

  return (
    <div className='todo-form'>
        <h2>Add To-do</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Enter To-do' 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <select category={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select category</option>
                <option value="Study">Study</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
            <button type='submit'>Add to-do</button>
        </form>
    </div>
  )
}

export default TodoForm