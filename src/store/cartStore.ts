import { create } from "zustand"

type ItemStore = {
  id: number
  name: string
  image: string
  soldout: boolean
  price: {
    value: number
  }
}

type Cart = {
  cart: ItemStore[]
  addToCart: (item: ItemStore) => void
  removeFromCart: (id: number) => void
}

export const useCartStore = create<Cart>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}))
