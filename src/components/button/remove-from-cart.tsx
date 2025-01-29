import { useProductStore } from "@/store/product-store"
import Image from "next/image"

interface RemoveFromCartProps {
  productId: string
}

export function RemoveFromCart({ productId }: RemoveFromCartProps) {
  const { removeFromCart } = useProductStore()

  const handleRemoveFromCart = () => {
    removeFromCart(productId)
  }

  return (
    <button
      onClick={handleRemoveFromCart}
      className="flex items-center gap-4 text-lg font-montserrat text-gray font-medium ml-16"
    >
      <Image
        src={"/svg/icon-trash.svg"}
        width={28}
        height={32}
        alt="Ícone de remover o item do carrinho"
      />
      Remover
    </button>
  )
}
