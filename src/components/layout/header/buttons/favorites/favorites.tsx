"use client"

import { useProductStore } from "@/store/product-store"
import Image from "next/image"
import { ModalFavorites } from "./modal-favorites"
import { useState } from "react"

export function BtnFavorites() {
  const { favorites } = useProductStore()
  const [isModalOpen, setModalOpen] = useState(false)

  const handleModal = () => setModalOpen(!isModalOpen)

  return (
    <>
      <button className="flex items-end gap-3 relative" onClick={handleModal}>
        <div className="relative">
          <Image
            src={"/svg/icon-heart.svg"}
            width={28}
            height={27}
            alt="Ícone de favoritos"
          />
          {favorites.length > 0 && (
            <span className="bg-linear02 w-5 h-5 text-light text-xs font-poppins absolute -top-2 -right-2 rounded-[100%] flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </div>
        <span className="text-gray01 text-sm font-poppins hover:text-primary01">
          Lista de desejos
        </span>
      </button>
      {isModalOpen && <ModalFavorites />}
    </>
  )
}
