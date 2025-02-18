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
  quantity,
}: Item) {
  const { toast } = useToast()
  const { addToCart, setModalEmailOpen, selectedNumbers } = useProductStore()

  const isSoldout = soldout ? "bg-primary01 px-20" : "bg-linear02 px-40"

  const handleCart = () => {
    if (soldout) {
      setModalEmailOpen(true)

      return
    }

    if (selectedNumbers[id] === undefined) {
      toast({
        title: "Selecione o tamanho",
        variant: "destructive",
      })

      return
    }

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
        quantity: quantity,
      })

      toast({ title: "Produto adicionado ao carrinho" })
    }
  }

  return (
    <button
      onClick={handleCart}
      className={`${isSoldout} py-2 w-full lg:w-fit  rounded-sm uppercase font-poppins text-light text-lg transition-all hover:brightness-95`}
    >
      {soldout ? "Me avise quando chegar" : "Comprar"}
    </button>
  )
}
