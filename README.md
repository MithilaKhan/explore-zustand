# Explore Zustand

A comprehensive guide to state management with **Zustand** using React and TypeScript.

## 🎯 Project Overview

This project demonstrates best practices for using Zustand, a lightweight state management library for React. It includes two practical examples:

1. **Counter Store** - Simple state management with basic actions
2. **Todo Store** - Advanced patterns with derived state and complex operations

## 📦 Features

✅ **Type-Safe** - Full TypeScript support with strict type checking
✅ **Best Practices** - Clean architecture and separation of concerns
✅ **Scalable** - Patterns that grow with your application
✅ **Developer Experience** - Easy to understand and maintain
✅ **Performance** - Minimal re-renders with selective subscriptions

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MithilaKhan/explore-zustand.git
cd explore-zustand

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
explore-zustand/
├── src/
│   ├── components/
│   │   ├── Counter.tsx        # Counter component
│   │   └── Todo.tsx           # Todo component
│   ├── store/
│   │   ├── counterStore.ts    # Simple counter store
│   │   └── todoStore.ts       # Advanced todo store
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # React entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
└── vite.config.ts             # Vite configuration
```

## 📚 Learning Path

### 1. Counter Store (Basic)
**File**: `src/store/counterStore.ts`

- Simple state definition
- Basic actions
- Type safety with TypeScript

```typescript
const { count, increment, decrement } = useCounterStore()
```

### 2. Todo Store (Advanced)
**File**: `src/store/todoStore.ts`

- Complex state structures
- Derived/computed state
- Array operations with immutability
- Advanced patterns

```typescript
const { todos, addTodo, getCompletionRate } = useTodoStore()
```

## 🔍 Key Concepts

### Creating a Store

```typescript
import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
```

### Using in Components

```typescript
function Counter() {
  const { count, increment } = useCounterStore()
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
```

### Derived State

```typescript
getCompletionRate: () => {
  const total = get().todos.length
  if (total === 0) return 0
  const completed = get().getCompletedTodos()
  return Math.round((completed / total) * 100)
}
```

## 🎨 UI Components

- Tab switching between Counter and Todo demos
- Responsive design with gradient background
- Clean, modern UI with smooth animations
- Accessible form inputs and buttons

## 💡 Best Practices Demonstrated

1. **Separation of Concerns** - Store logic separate from components
2. **Type Safety** - Strong TypeScript interfaces
3. **Immutability** - Never mutate state directly
4. **Derived State** - Computed values from store state
5. **Selective Subscriptions** - Components only re-render when needed
6. **Clear File Structure** - Easy to navigate and maintain

## 🔗 Resources

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

---

**Created**: 2026-04-27
**Author**: MithilaKhan
