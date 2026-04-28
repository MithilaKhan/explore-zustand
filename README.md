# Explore Zustand

A React application demonstrating state management with Zustand, featuring CRUD operations on posts using the JSONPlaceholder API.

## 🚀 Features

- **State Management**: Clean and efficient state management with Zustand
- **CRUD Operations**: Create, read, update, and delete posts
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Responsive design with Tailwind CSS and Lucide icons
- **API Integration**: RESTful API calls with custom fetch wrapper
- **Error Handling**: Comprehensive error handling and loading states

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Zustand** - State management
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **JSONPlaceholder** - Mock API

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MithilaKhan/explore-zustand.git
cd explore-zustand
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `https://explore-zustand.vercel.app/`.

## 📁 Project Structure

```
src/
├── components/
│   ├── Posts.tsx          # Main posts component with CRUD operations
│   └── PostModal.tsx      # Modal for creating/editing posts
├── store/
│   └── postStore.ts       # Zustand store for post state management
├── App.tsx                # Main application component
└── main.tsx               # Application entry point

helpers/
└── myFetch.ts             # Custom fetch wrapper for API calls
```

## 🎯 Usage

The application allows you to:
- View a list of posts fetched from the API
- Create new posts with title and body
- Edit existing posts
- Delete posts
- Handle loading and error states gracefully

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

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
