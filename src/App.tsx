import { useState } from 'react'
import Counter from './components/Counter'
import Todo from './components/Todo'

type Tab = 'counter' | 'todo'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('counter')

  return (
    <div className="container">
      <h1>🚀 Explore Zustand</h1>
      
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'counter' ? 'active' : ''}`}
          onClick={() => setActiveTab('counter')}
        >
          Counter Store
        </button>
        <button
          className={`tab-button ${activeTab === 'todo' ? 'active' : ''}`}
          onClick={() => setActiveTab('todo')}
        >
          Todo Store
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'counter' && <Counter />}
        {activeTab === 'todo' && <Todo />}
      </div>
    </div>
  )
}

export default App
