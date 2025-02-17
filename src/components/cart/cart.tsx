"use client"

import { useProductStore } from "@/store/product-store"
import { ItemCart } from "./item-cart"

export function Cart() {
  const { cart } = useProductStore()
  const totalPrice = cart.reduce(
    (total, item) => total + item.price.value * item.quantity,
    0
  )

  return (
    <div>
      {cart.length > 0 && (
        <div className="flex flex-col gap-8 lg:gap-16">
          {cart.map(({ id, image, name, price: { value } }, index) => (
            <div key={index}>
              <ItemCart
                image={image}
                name={name}
                productId={id}
                price={value}
              />
              <div className="w-full mt-4 h-px bg-primary01 opacity-50"></div>
            </div>
          ))}
          <p className="text-[28px] text-gray font-bold font-montserrat">
            Valor total: R$ {totalPrice.toLocaleString("pt-BR")}
          </p>
        </div>
      )}
    </div>
  )
}
