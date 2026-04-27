import { create } from 'zustand'

/**
 * Counter Store - Simple example of Zustand state management
 * 
 * Demonstrates:
 * - Basic state definition
 * - Simple actions
 * - Type safety with TypeScript
 */

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  incrementBy: (amount: number) => void
  reset: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  
  increment: () => set((state) => ({ count: state.count + 1 })),
  
  decrement: () => set((state) => ({ count: state.count - 1 })),
  
  incrementBy: (amount: number) =>
    set((state) => ({ count: state.count + amount })),
  
  reset: () => set({ count: 0 }),
}))
