import Image from "next/image"

export function BtnFavorites() {
  return (
    <button className="flex items-end gap-3">
      <Image
        src={"/svg/icon-heart.svg"}
        width={28}
        height={27}
        alt="Ícone de favoritos"
      />
      <span className="text-gray01 text-sm font-poppins">Lista de desejos</span>
    </button>
  )
}
