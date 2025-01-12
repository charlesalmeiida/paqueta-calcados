import { Button } from "@/components/button"
import Image from "next/image"

interface CardItemProps {
  name: string
  price: number
  image: string
}

export function CardItem({ name, price, image }: CardItemProps) {
  return (
    <div className="bg-light rounded-sm max-w-[307px] pt-14 pb-6 cursor-pointer px-6 shadow-shape w-fit relative">
      <button className="absolute top-10 right-10">
        <Image
          src={"/svg/icon-fav-fill.svg"}
          width={20}
          height={18}
          alt="Ícone de favoritar produto"
        />
      </button>
      <div className="space-y-6">
        <div>
          <Image src={image} width={210} height={149} alt="Imagem do produto" />
        </div>
        <div>
          <p className="uppercase text-gray font-montserrat text-sm font-medium">
            {name}
          </p>
          <div className="space-y-2 mt-3">
            <h6>{price}</h6>
            <span className="text-gray01 font-montserrat text-xs opacity-60">
              OU 9X R$ 16,66
            </span>
          </div>
          <div className="mt-3">
            <Button weight="bold">COMPRAR</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
