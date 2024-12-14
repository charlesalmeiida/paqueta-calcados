import { create } from "zustand"
import { api } from "@/services/api"

export type ItemStore = {
  id: string
  name: string
  image: string
  soldout: boolean
  price: {
    value: number
  }
}

export type Products = {
  availableItems: ItemStore[]
  fetchAvailableItems: () => Promise<void>
}

export const useItemStore = create<Products>((set) => ({
  availableItems: [],
  fetchAvailableItems: async () => {
    try {
      const response = await api.get("/shoes")
      set({ availableItems: response.data })
    } catch (error) {
      console.error("Erro ao buscar itens disponíveis:", error)
    }
  },
}))
