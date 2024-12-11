import Image from "next/image"

export function BtnCart() {
  return (
    <button className="flex relative items-end gap-3 text-secondaryLight font-poppins text-sm">
      <Image
        src={"/svg/icon-bag.svg"}
        width={26}
        height={26}
        alt="Imagem de sacola de compras"
      />
      <span className="font-poppins absolute -top-2 right-12 text-xs text-light w-5 h-5 flex items-center justify-center bg-linearButton rounded-full">
        2
      </span>
      Sacola
    </button>
  )
}
