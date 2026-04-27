import { create } from 'zustand'

/**
 * Todo Store - Advanced example with complex state management
 * 
 * Demonstrates:
 * - Complex state structures
 * - Derived/computed state
 * - Array operations with immutability
 * - Advanced patterns
 */

export interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

interface TodoState {
  todos: Todo[]
  addTodo: (title: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
  clearCompleted: () => void
  getTotalTodos: () => number
  getCompletedTodos: () => number
  getPendingTodos: () => number
  getCompletionRate: () => number
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [
    {
      id: '1',
      title: 'Learn Zustand',
      completed: true,
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Build a project with Zustand',
      completed: false,
      createdAt: new Date(),
    },
  ],

  addTodo: (title: string) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now().toString(),
          title,
          completed: false,
          createdAt: new Date(),
        },
      ],
    })),

  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  removeTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),

  // Derived state - computed values
  getTotalTodos: () => get().todos.length,

  getCompletedTodos: () =>
    get().todos.filter((todo) => todo.completed).length,

  getPendingTodos: () =>
    get().todos.filter((todo) => !todo.completed).length,

  getCompletionRate: () => {
    const total = get().todos.length
    if (total === 0) return 0
    const completed = get().getCompletedTodos()
    return Math.round((completed / total) * 100)
  },
}))
