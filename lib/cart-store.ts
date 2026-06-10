import { create } from 'zustand'
import type { CartItem } from '@/types'

// TODO: add localStorage persistence in v2
interface CartStore {
  items: CartItem[]
  isOpen: boolean
  setOpen: (open: boolean) => void
  addItem: (item: CartItem) => void
  updateQuantity: (productId: string, qty: number) => void
  updateNote: (productId: string, note: string) => void
  removeItem: (productId: string) => void
  clearCart: () => void
  total: () => number
  count: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  setOpen: (open) => set({ isOpen: open }),

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.productId === item.productId)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === item.productId
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        }
      }
      return { items: [...state.items, { ...item, quantity: Math.max(50, item.quantity) }] }
    }),

  updateQuantity: (productId, qty) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.productId === productId ? { ...i, quantity: Math.max(50, qty) } : i
      ),
    })),

  updateNote: (productId, note) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.productId === productId ? { ...i, customNote: note } : i
      ),
    })),

  removeItem: (productId) =>
    set((state) => ({ items: state.items.filter((i) => i.productId !== productId) })),

  clearCart: () => set({ items: [] }),

  total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

  count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}))
