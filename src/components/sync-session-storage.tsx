"use client"

import { useEffect } from "react"
import { useProductStore } from "@/store/product-store"

export default function SyncSessionStorage() {
  const { setSelectedNumber, setFavorites, setCart } = useProductStore()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFavorites = JSON.parse(
        sessionStorage.getItem("favorites") || "[]"
      )
      const savedCart = JSON.parse(sessionStorage.getItem("cart") || "[]")
      const savedSelectedNumbers = JSON.parse(
        sessionStorage.getItem("selectedNumbers") || "{}"
      )

      setFavorites(savedFavorites)
      setCart(savedCart)

      Object.entries(savedSelectedNumbers).forEach(([productId, number]) => {
        setSelectedNumber(productId, number as number)
      })
    }
  }, [setSelectedNumber, setFavorites, setCart])

  return null
}
