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
  modalEmailOpen: boolean
  setModalEmailOpen: (open: boolean) => void
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
  cart: JSON.parse(sessionStorage.getItem("cart") || "[]"),
  products: [],
  favorites: JSON.parse(sessionStorage.getItem("favorites") || "[]"),
  avaibleNumbers: Numbers,
  selectedNumbers: JSON.parse(
    sessionStorage.getItem("selectedNumbers") || "{}"
  ),
  modalEmailOpen: false,
  setModalEmailOpen: (open: boolean) => set({ modalEmailOpen: open }),
  fetchProducts: async () => {
    const response = await fetch(
      "https://api.brchallenges.com/api/paqueta/shoes"
    )
    const products = await response.json()
    set({ products })
  },
  addToFavorites: (item: Item) => {
    set((state) => {
      const updatedFavorites = [...state.favorites, item]
      sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites))
      return { favorites: updatedFavorites }
    })
  },
  removeFromFavorites: (itemId: string) => {
    set((state) => {
      const updatedFavorites = state.favorites.filter(
        (item) => item.id !== itemId
      )
      sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites))
      return { favorites: updatedFavorites }
    })
  },
  addToCart: (item: Item) => {
    set((state) => {
      const updatedCart = [...state.cart, item]
      sessionStorage.setItem("cart", JSON.stringify(updatedCart))
      return { cart: updatedCart }
    })
  },
  removeFromCart: (itemId: string) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== itemId)
      sessionStorage.setItem("cart", JSON.stringify(updatedCart))
      return { cart: updatedCart }
    })
  },
  setSelectedNumber: (productId, number) => {
    set((state) => {
      const updatedSelectedNumbers = {
        ...state.selectedNumbers,
        [productId]: number,
      }
      sessionStorage.setItem(
        "selectedNumbers",
        JSON.stringify(updatedSelectedNumbers)
      )
      return { selectedNumbers: updatedSelectedNumbers }
    })
  },
}))
