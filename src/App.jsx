import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: 'Learn React',
      category: 'Study',
      isCompleted: false
    },
    {
      id:2,
      text: 'Go to gym',
      category: 'Personal',
      isCompleted: false
    },
    {
      id:3,
      text: 'Check e-mail',
      category: 'Work',
      isCompleted: false
    }
  ])

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('Ascending')

  const addTodo = (text, category) => {
    const newTodos = [...todos, 
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !==id ? todo:null
    )
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => 
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    )
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>My ToDo List</h1>
      < Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
      <div className='todo-list'>
        {todos
        .filter((todo) => 
             filter === 'all' ? true : filter === 'completed' ? 
             todo.isCompleted : !todo.isCompleted)
        .filter((todo) => 
              todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) =>
              sort === 'Ascending' ?a.text.localeCompare(b.text) : b.text.localeCompare(a.text)) 
        .map((todo)=>(
          <Todo key= {todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
