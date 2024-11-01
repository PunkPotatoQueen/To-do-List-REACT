import React from "react";

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className='todo' style={
      {textDecoration: todo.isCompleted ? 'line-through' : 'none'}
    }>
            <div className='content'>
              <p className='text'>{todo.text}</p>
              <p className='category'>({todo.category})</p>
            </div>
            <div className='actions'>
              <button className='complete' onClick={() => completeTodo(todo.id)}>Complete</button>
              <button className='remove' onClick={() => removeTodo(todo.id)}>Remove</button>
            </div>
    </div>
  )
}

export default Todo