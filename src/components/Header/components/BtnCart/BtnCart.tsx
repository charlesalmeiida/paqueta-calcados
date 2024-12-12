import Image from "next/image"
import { useCartStore } from "@/store/cartStore"

export function BtnCart() {
  const cart = useCartStore((state) => state.cart)

  return (
    <button className="flex relative items-end gap-3 text-secondaryLight font-poppins text-sm">
      <Image
        src={"/svg/icon-bag.svg"}
        width={26}
        height={26}
        alt="Imagem de sacola de compras"
      />
      {cart.length > 0 && (
        <span className="font-poppins absolute -top-2 right-12 text-xs text-light w-5 h-5 flex items-center justify-center bg-linearButton rounded-full">
          {cart.length}
        </span>
      )}
      Sacola
    </button>
  )
}
