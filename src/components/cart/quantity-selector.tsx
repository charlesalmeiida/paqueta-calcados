"use client"

import { useProductStore } from "@/store/product-store"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface QuantitySelectorProps {
  productId: string
}

export function QuantitySelector({ productId }: QuantitySelectorProps) {
  const { cart, addToCart, decreaseQuantity } = useProductStore()

  const productInCart = cart.find((item) => item.id === productId)
  const quantity = productInCart ? productInCart.quantity : 1

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8"
          onClick={() => decreaseQuantity(productId)}
          disabled={quantity <= 1}
        >
          <Minus className="w-4 h-4" />
        </Button>

        <span className="text-lg font-medium">{quantity}</span>

        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8"
          onClick={() => addToCart(productInCart!)}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </>
  )
}
