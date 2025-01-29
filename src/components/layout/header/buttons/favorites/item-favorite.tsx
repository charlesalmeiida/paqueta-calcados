import { useProductStore } from "@/store/product-store"
import Image from "next/image"

interface ItemFavoriteProps {
  productId: string
  name: string
  image: string
  price: number
}

export function ItemFavorite({
  productId,
  name,
  image,
  price,
}: ItemFavoriteProps) {
  const { removeFromFavorites } = useProductStore()

  const handleRemove = () => removeFromFavorites(productId)

  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-16 h-16 relative">
        <Image
          src={image}
          alt="Imagem do produto"
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />
      </div>
      <div className="flex-1">
        <h6 className="text-lg font-medium text-gray">{name}</h6>
        <p className="text-gray01">R$ {price.toLocaleString("pt-BR")}</p>
      </div>
      <button
        onClick={handleRemove}
        className="text-primary01 font-montserrat font-semibold hover:brightness-90"
      >
        Remover
      </button>
    </div>
  )
}
