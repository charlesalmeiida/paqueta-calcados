import { useFavItemStore } from "@/store/itemFavStore"
import Image from "next/image"

export function BtnFavorites() {
  const favItem = useFavItemStore((state) => state.itemsFav)

  return (
    <button className="flex relative items-end gap-3 text-secondaryLight font-poppins text-sm">
      <Image
        src={"/svg/icon-heart.svg"}
        width={28}
        height={27}
        alt="Imagem de um coracao preto"
      />
      {favItem.length > 0 && (
        <span className="font-poppins absolute -top-2 right-28 text-xs text-light w-5 h-5 flex items-center justify-center bg-linearButton rounded-full">
          {favItem.length}
        </span>
      )}
      Lista de desejos
    </button>
  )
}
