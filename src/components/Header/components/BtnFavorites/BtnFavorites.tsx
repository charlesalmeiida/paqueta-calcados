import Image from "next/image"

export function BtnFavorites() {
  return (
    <button className="flex items-end gap-3 text-secondaryLight font-poppins text-sm">
      <Image
        src={"/svg/icon-heart.svg"}
        width={28}
        height={27}
        alt="Imagem de um coracao preto"
      />
      Lista de desejos
    </button>
  )
}
