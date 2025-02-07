"use client"

import Image from "next/image"
import { RemoveFromCart } from "../button/remove-from-cart"
import { useProductStore } from "@/store/product-store"

interface ItemCartProps {
  image: string
  name: string
  productId: string
  price: number
}

export function ItemCart({ image, name, productId, price }: ItemCartProps) {
  const { selectedNumbers } = useProductStore()
  const selectedNumber =
    selectedNumbers[productId] || "Nenhum tamanho selecionado"

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
              <strong>Quantidade: </strong> 1
            </p>
            <p>
              <strong>Preço: </strong> R$ {price.toLocaleString("pt-BR")}
            </p>
          </div>
        </div>
      </div>
      <RemoveFromCart productId={productId} />
    </div>
  )
}
