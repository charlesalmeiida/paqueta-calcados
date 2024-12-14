import { useFavItemStore } from "@/store/itemFavStore"
import { ItemStore } from "@/store/itemStore"
import Image from "next/image"

interface AddToFavoritesProps {
  product: ItemStore
}

export function AddToFavorites({ product }: AddToFavoritesProps) {
  const isItemFav = useFavItemStore((state) => state.isFavorite(product.id))
  const setFavItem = useFavItemStore((state) => state.addToFavorites)
  const removeFavItem = useFavItemStore((state) => state.removeFromFavorites)

  return (
    <button
      {...(product && {
        onClick: () =>
          isItemFav ? removeFavItem(product.id) : setFavItem(product),
      })}
      className="flex w-full justify-end mt-2 pt-10 pr-8"
    >
      {isItemFav ? (
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
  )
}
