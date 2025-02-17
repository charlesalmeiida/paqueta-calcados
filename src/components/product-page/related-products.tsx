"use client"

import { useProductStore } from "@/store/product-store"
import { useEffect } from "react"
import { CardItem } from "../homepage/products/card-item/card-item"

export function RelatedProducts() {
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [products])

  return (
    <div>
      <h3 className="font-montserrat text-2xl lg:text-[34px] font-bold text-gray">
        TALVEZ POSSA LHE INTERESSAR
      </h3>
      <div className="flex items-center justify-between mt-8 overflow-x-auto whitespace-nowrap lg:overflow-x-clip lg:whitespace-normal">
        {products.slice(8, 12).map((product) => (
          <div key={product.id}>
            <CardItem
              soldout={product.soldout}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price.value}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
