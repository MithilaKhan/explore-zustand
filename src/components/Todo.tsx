import { useState } from 'react'
import { useTodoStore } from '@/store/todoStore'

function Todo() {
  const {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
    getTotalTodos,
    getCompletedTodos,
    getPendingTodos,
    getCompletionRate,
  } = useTodoStore()

  const [input, setInput] = useState('')

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input.trim())
      setInput('')
    }
  }

  return (
    <div>
      <div className="section">
        <div className="section-title">Add New Todo</div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          />
          <button className="btn-primary" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Todos ({getTotalTodos()})</div>
        {todos.length === 0 ? (
          <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>
            No todos yet. Add one to get started!
          </p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className="todo-text">{todo.title}</span>
                <button
                  className="todo-delete"
                  onClick={() => removeTodo(todo.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <div className="stats">
          <div className="stat-item">
            <div className="stat-label">Total</div>
            <div className="stat-value">{getTotalTodos()}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Completed</div>
            <div className="stat-value">{getCompletedTodos()}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Pending</div>
            <div className="stat-value">{getPendingTodos()}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Rate</div>
            <div className="stat-value">{getCompletionRate()}%</div>
          </div>
        </div>
      </div>

      {todos.some((todo) => todo.completed) && (
        <div className="section">
          <button className="btn-danger" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      )}
    </div>
  )
}

export default Todo
