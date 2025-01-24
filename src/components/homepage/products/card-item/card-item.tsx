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
        <button className="absolute top-10 right-10 mt-2">
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
          <div className="mt-6">
            <p className="uppercase text-gray font-montserrat text-sm font-medium">
              {name}
            </p>
            <div className="space-y-2 mt-3">
              <h6>R$ {price}</h6>
              <span className="text-gray01 block mt-2 font-montserrat text-xs opacity-60">
                OU {parcelas}X R$ {(price / parcelas).toFixed(2)}
              </span>
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
