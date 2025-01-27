"use client"

import { useToast } from "@/hooks/use-toast"

export function AddToCart() {
  const { toast } = useToast()

  return (
    <button
      onClick={() => toast({ title: "Produto adicionado ao carrinho" })}
      className="py-2 px-40 bg-linear02 rounded-sm uppercase font-poppins text-light text-lg transition-all hover:brightness-95"
    >
      COMPRAR
    </button>
  )
}
