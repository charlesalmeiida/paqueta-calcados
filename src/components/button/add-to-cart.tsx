"use client"

import { useToast } from "@/hooks/use-toast"
import { Item, useProductStore } from "@/store/product-store"

export function AddToCart({
  id,
  soldout,
  name,
  price: { value, discount },
  image,
  description,
}: Item) {
  const { toast } = useToast()
  const { addToCart } = useProductStore()

  const handleCart = () => {
    toast({ title: "Produto adicionado ao carrinho" })

    if (!soldout) {
      addToCart({
        id: id,
        soldout: false,
        name: name,
        price: {
          value: value,
          discount: discount,
        },
        image: image,
        description: description,
      })
    }

    if (soldout) {
      toast({
        title: "Produto indisponível no momento",
      })
    }
  }

  return (
    <button
      onClick={handleCart}
      className="py-2 px-40 bg-linear02 rounded-sm uppercase font-poppins text-light text-lg transition-all hover:brightness-95"
    >
      COMPRAR
    </button>
  )
}
