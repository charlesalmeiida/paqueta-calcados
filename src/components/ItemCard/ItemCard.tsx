"use client"

import Image from "next/image"
import { Button } from "../Button"
import { useState } from "react"

interface ItemCardProps {
  soldout: boolean
  image: string
  name: string
  value: number
}

export function ItemCard({ soldout, image, name, value }: ItemCardProps) {
  const [isFavItem, setIsFavItem] = useState(false)

  const FavItemHandler = () => {
    setIsFavItem(!isFavItem)
  }

  return (
    <div className="bg-light cursor-pointer max-w-[307px] h-[412px] text-left w-full rounded-sm relative shadow-shadowShape">
      {soldout && (
        <div className="bg-primaryDark top-0 w-full absolute">
          <h5 className="text-center py-2 text-light text-sm font-poppins font-bold">
            PRODUTO ESGOTADO
          </h5>
        </div>
      )}
      <button
        onClick={FavItemHandler}
        className="flex w-full justify-end mt-2 pt-10 pr-8"
      >
        {isFavItem ? (
          <Image
            src={"/svg/icon-fav-fill.svg"}
            width={24}
            height={24}
            alt="Imagem de um coracao preto"
          />
        ) : (
          <Image
            src={"/svg/icon-fav.svg"}
            width={24}
            height={24}
            alt="Imagem de um coracao branco"
          />
        )}
      </button>
      <div className="space-y-3 px-6 pb-6">
        <div>
          <Image
            src={image}
            width={198}
            height={159}
            alt="Imagem de um sapato"
            className="max-w-[198px] -mt-5 max-h-[159px]"
          />
          <h4 className="font-montserrat uppercase text-secondary font-medium text-sm mt-6">
            {name}
          </h4>
        </div>
        <div>
          <strong className="font-montserrat text-secondary text-xl font-bold mt-3 block">
            R$ {value}
          </strong>
          <span className="text-secondaryLight text-xs opacity-60 font-montserrat">
            OU 9X R$ 16,66
          </span>
        </div>
        <Button type={soldout ? "soldOut" : "primary"}>
          {soldout ? "ME AVISE QUANDO CHEGAR" : "COMPRAR"}
        </Button>
      </div>
    </div>
  )
}
