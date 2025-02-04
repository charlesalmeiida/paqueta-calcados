import { create } from "zustand"

export type Item = {
  id: string
  name: string
  price: {
    value: number
    discount: number
  }
  soldout: boolean
  image: string
  description: string
}

const Numbers = [34, 35, 36, 37, 38, 39, 40]

type CartStore = {
  cart: Item[]
  products: Item[]
  favorites: Item[]
  fetchProducts: () => Promise<void>
  addToFavorites: (product: Item) => void
  removeFromFavorites: (productId: string) => void
  addToCart: (product: Item) => void
  removeFromCart: (productId: string) => void
  avaibleNumbers: number[]
  selectedNumbers: { [productId: string]: number | null }
  setSelectedNumber: (productId: string, number: number) => void
}

export const useProductStore = create<CartStore>((set) => ({
  cart: [],
  products: [],
  favorites: [],
  avaibleNumbers: Numbers,
  selectedNumbers: {},
  fetchProducts: async () => {
    const response = await fetch(
      "https://api.brchallenges.com/api/paqueta/shoes"
    )
    const products = await response.json()
    set({ products })
  },
  addToFavorites: (product: Item) =>
    set((state) => {
      if (!state.favorites.find((item) => item.id === product.id)) {
        return { favorites: [...state.favorites, product] }
      }
      return state
    }),
  removeFromFavorites: (productId: string) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== productId),
    })),
  addToCart: (product: Item) =>
    set((state) => {
      if (!state.cart.find((item) => item.id === product.id)) {
        return { cart: [...state.cart, product] }
      }
      return state
    }),
  removeFromCart: (productId: string) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  setSelectedNumber: (productId, number) =>
    set((state) => ({
      selectedNumbers: {
        ...state.selectedNumbers,
        [productId]: number,
      },
    })),
}))
