"use client"

import { useProductStore } from "@/store/product-store"
import Image from "next/image"
import { useState } from "react"

interface HandleFavoritesProps {
  id: string
  name: string
  image: string
  price: {
    value: number
  }
  soldout: boolean
}

export function HandleFavorites({
  id,
  name,
  image,
  price: { value },
  soldout,
}: HandleFavoritesProps) {
  const { addToFavorites, removeFromFavorites, favorites } = useProductStore()
  const [isFavorited, setIsFavorited] = useState(false)

  const src = favorites.find((item) => item.id === id)
    ? "/svg/icon-fav-product-fill.svg"
    : "/svg/icon-fav-product.svg"

  const handleFavorites = () => {
    if (favorites.find((item) => item.id === id)) {
      removeFromFavorites(id)
    } else {
      addToFavorites({
        id,
        name,
        image,
        price: {
          value: value,
          discount: 0,
        },
        soldout,
        description: "",
      })
    }

    setIsFavorited(!isFavorited)
  }

  return (
    <button onClick={handleFavorites}>
      <Image
        src={src}
        width={35}
        height={31}
        alt="Ícone de adicionar aos favoritos"
      />
    </button>
  )
}
