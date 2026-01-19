import { create } from 'zustand'

export const useCounterStore = create((set) => ({
    value: 0,
    increment: () => set((state) => ({ value: state.value + 1 })),
    decrement: () => set((state) => ({ value: state.value - 1 })),
    incrementByAmount: (amount) => set((state) => ({ value: state.value + amount })),
}));
