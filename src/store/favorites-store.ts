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

type CartStore = {
  products: Item[]
  favorites: Item[]
  fetchProducts: () => Promise<void>
  addToFavorites: (product: Item) => void
  removeFromFavorites: (productId: string) => void
}

export const useProductStore = create<CartStore>((set) => ({
  products: [],
  favorites: [],
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
}))
