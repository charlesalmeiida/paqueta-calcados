import { create } from "zustand"
import { ItemStore } from "./itemStore"

type FavItem = {
  itemsFav: ItemStore[]
  addToFavorites: (item: ItemStore) => void
  removeFromFavorites: (id: string) => void
  isFavorite: (id: string) => boolean
}

export const useFavItemStore = create<FavItem>((set, get) => ({
  itemsFav: [],
  addToFavorites: (item) => {
    set((state) => {
      if (!state.itemsFav.find((favItem) => favItem.id === item.id)) {
        return { itemsFav: [...state.itemsFav, item] }
      }
      return state
    })
  },

  removeFromFavorites: (id) => {
    set((state) => ({
      itemsFav: state.itemsFav.filter((item) => item.id !== id),
    }))
  },

  isFavorite: (id) => {
    return !!get().itemsFav.find((favItem) => favItem.id === id)
  },
}))
