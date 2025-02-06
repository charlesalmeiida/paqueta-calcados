"use client"

import { useState } from "react"
import { ModalGuide } from "../product-page/modal-guide"

export function SizesGuide() {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(!isModalOpen)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleModal}
        className="text-gray01 text-base font-montserrat opacity-60 font-bold mt-8"
      >
        Guia de tamanhos
      </button>
      <ModalGuide modalOpen={isModalOpen} closeModal={closeModal} />
    </>
  )
}
