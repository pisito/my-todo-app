import React, { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false
    }
    setTodos([...todos, newItem])
    setNewTodo("")
  }

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1>📝 My Todo List</h1>

      <div style={{ marginBottom: "20px" }}>
        <input 
          value={newTodo} 
          onChange={e => setNewTodo(e.target.value)} 
          placeholder="Add new todo" 
          style={{ padding: "10px", width: "70%" }} 
        />
        <button onClick={handleAddTodo} style={{ padding: "10px 20px", marginLeft: "10px" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ padding: "10px 0", borderBottom: "1px solid #ccc" }}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleCompleted(todo.id)} 
            />
            <span style={{ marginLeft: "10px" }}>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
