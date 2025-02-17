"use client"

import Image from "next/image"
import { RemoveFromCart } from "../button/remove-from-cart"
import { useProductStore } from "@/store/product-store"
import { QuantitySelector } from "./quantity-selector"

interface ItemCartProps {
  image: string
  name: string
  productId: string
  price: number
}

export function ItemCart({ image, name, productId, price }: ItemCartProps) {
  const { selectedNumbers, cart } = useProductStore()

  const selectedNumber =
    selectedNumbers[productId] || "Nenhum tamanho selecionado"

  const productInCart = cart.find((item) => item.id === productId)
  const quantity = productInCart ? productInCart.quantity : 1

  const priceFormatted = (price * quantity).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
      <div className="flex flex-col lg:flex-row lg:gap-16">
        <Image
          src={image}
          width={219}
          height={258}
          alt="Imagem do produto"
          className="flex-1"
        />
        <div>
          <h2 className="text-2xl lg:text-[38px] uppercase text-gray font-bold font-montserrat">
            {name}
          </h2>
          <span className="text-gray01 opacity-80 text-lg font-montserrat">
            Código do produto: {productId}
          </span>
          <div className="mt-5 space-y-3 font-montserrat text-xl text-gray01">
            <p>
              <strong>Numeração: </strong> {selectedNumber}
            </p>
            <p>
              <strong>Cor: </strong> Preto
            </p>
            <p>
              <strong>Quantidade: </strong> {quantity}
              <QuantitySelector productId={productId} />
            </p>
            <p>
              <strong>Preço Total: </strong> {priceFormatted}
            </p>
          </div>
        </div>
      </div>
      <RemoveFromCart productId={productId} />
    </div>
  )
}
