import { create } from 'zustand'

export interface BearState {
  bears: number
  increase: () => void
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}))

export default useBearStore