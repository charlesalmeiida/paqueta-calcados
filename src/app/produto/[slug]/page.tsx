"use client"

import { Container } from "@/components/Container"
import { useSearchParams } from "next/navigation"
import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb"
import Image from "next/image"
import { AddToFavorites } from "@/components/BtnAddFavorites"

interface Product {
  id: string
  name: string
  price: {
    value: number
    discount: number
  }
  soldout: boolean
  image: string
  description: string
}

export default function Product() {
  const searchParams = useSearchParams()
  const [product, setProduct] = useState<Product | null>(null)

  const id = searchParams.get("id")

  useEffect(() => {
    api.get(`/shoe/${id}`).then((response) => setProduct(response.data[0]))
  }, [id])

  return (
    <section className="py-20">
      <Container>
        <Breadcrumb>{product?.name.split(" ")[0]}</Breadcrumb>
        <div className="flex gap-20">
          <div>
            {product?.name && product.image && (
              <Image
                src={product?.image}
                alt={product?.name}
                width={703}
                height={521}
              />
            )}
          </div>
          <div>
            <div className="w-fit">{product && <AddToFavorites product={product} />}</div>
            <h2 className="font-montserrat text-[40px] text-secondary font-semibold">
              {product?.name}
            </h2>
            <span className="mt-4 block text-secondaryLight opacity-80 font-montserrat text-lg">Código do produto: {product?.id.slice(0, 6)}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
