import { useProductStore } from "@/store/product-store"
import Image from "next/image"

export function Cart() {
  const { cart } = useProductStore()

  return (
    <button className="flex items-end gap-3">
      <div className="relative">
        <Image
          src={"/svg/icon-bag.svg"}
          width={26}
          height={26}
          alt="Ícone de sacola"
        />
        {cart.length > 0 && (
          <span className="bg-linear02 w-5 h-5 text-light text-xs font-poppins absolute -top-2 -right-2 rounded-[100%] flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </div>
      <span className="text-gray01 text-sm font-poppins">Sacola</span>
    </button>
  )
}
