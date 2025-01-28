"use client"

import { useProductStore } from "@/store/product-store"
import { ItemCart } from "./item-cart"

export function Cart() {
  const { cart } = useProductStore()

  return (
    <div>
      {cart.length > 0 && (
        <div className="flex flex-col gap-16">
          {cart.map(({ id, image, name, price: { value } }) => (
            <>
              <ItemCart
                key={id}
                image={image}
                name={name}
                id={id}
                price={value}
              />
              <div className="w-full h-px bg-primary01 opacity-50"></div>
            </>
          ))}
        </div>
      )}
    </div>
  )
}
