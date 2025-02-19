"use client"

import { useToast } from "@/hooks/use-toast"
import { useProductStore } from "@/store/product-store"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface CardItemProps {
  name: string
  price: number
  image: string
  id: string
  soldout: boolean
}

export function CardItem({ name, price, image, id, soldout }: CardItemProps) {
  const { toast } = useToast()
  const { addToFavorites, removeFromFavorites, favorites } = useProductStore()
  const [isFavorited, setIsFavorited] = useState(false)

  const iconFavorited = favorites.find((item) => item.id === id)
    ? "/svg/icon-fav-fill.svg"
    : "/svg/icon-fav.svg"

  const handleFavorites = () => {
    toast({ title: "Produto adicionado aos favoritos!" })

    addToFavorites({
      id,
      name,
      image,
      price: {
        value: price,
        discount: 0,
      },
      soldout,
      description: "",
      quantity: 1,
    })

    if (favorites.find((item) => item.id === id)) {
      removeFromFavorites(id)

      toast({ title: "Produto removido dos favoritos!" })
    }

    setIsFavorited(!isFavorited)
  }

  const parcelas = price > 150 ? 10 : 9

  return (
    <>
      {soldout && (
        <div className="bg-primary01 z-40 py-2 absolute w-full max-w-[307px] flex justify-center">
          <span className="text-light block font-poppins text-sm font-bold">
            PRODUTO ESGOTADO
          </span>
        </div>
      )}
      <div className="bg-light rounded-sm max-w-[307px] h-[412px] pt-14 pb-6 cursor-pointer px-6 shadow-shape w-fit relative flex flex-col justify-between">
        <button
          onClick={handleFavorites}
          className="absolute top-10 right-10 mt-2"
        >
          <Image
            src={iconFavorited}
            width={20}
            height={18}
            alt="Ícone de favoritar produto"
          />
        </button>
        <div>
          <div className="relative w-[210px] h-[149px] overflow-hidden">
            <Image
              src={image}
              width={210}
              height={149}
              alt="Imagem do produto"
              className="object-cover"
            />
          </div>
          <div className="mt-6">
            <p className="uppercase text-gray font-montserrat text-sm font-medium">
              {name}
            </p>
            <div className="space-y-2 mt-3">
              <h6>R$ {price.toLocaleString("pt-BR")}</h6>
              <span className="text-gray01 block mt-2 font-montserrat text-xs opacity-60">
                OU {parcelas}X R${" "}
                {(price / parcelas).toFixed(2).replace(".", ",")}
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Link
            className={`py-2 w-[257px] flex items-center justify-center ${
              soldout
                ? "bg-primary01 text-base"
                : "bg-linear02 font-bold text-lg"
            } rounded-sm uppercase font-poppins text-light transition-all hover:brightness-95`}
            href={`${id}`}
          >
            {soldout ? "me avise quando chegar" : "comprar"}
          </Link>
        </div>
      </div>
    </>
  )
}
