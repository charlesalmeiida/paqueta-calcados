import Image from "next/image"
import Link from "next/link"

interface CardItemProps {
  name: string
  price: number
  image: string
  id: string
  soldout: boolean
}

export function CardItem({ name, price, image, id, soldout }: CardItemProps) {
  return (
    <div className="bg-light rounded-sm max-w-[307px] h-[412px] pt-14 pb-6 cursor-pointer px-6 shadow-shape w-fit relative">
      <button className="absolute top-10 right-10">
        <Image
          src={"/svg/icon-fav.svg"}
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
        <div>
          <p className="uppercase text-gray font-montserrat text-sm font-medium">
            {name}
          </p>
          <div className="space-y-2 mt-3">
            <h6>R$ {price}</h6>
            <span className="text-gray01 font-montserrat text-xs opacity-60">
              OU 9X R$ 16,66
            </span>
          </div>
          <div className="mt-3">
            <Link
              className={`py-2 w-full flex items-center justify-center ${
                soldout ? "bg-primary01 text-base" : "bg-linear02 font-bold text-lg"
              } rounded-sm uppercase font-poppins text-light transition-all hover:brightness-95 `}
              href={`${id}`}
            >
              {soldout ? "me avise quando chegar" : "comprar"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
