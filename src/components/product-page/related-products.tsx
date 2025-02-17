"use client"

import { useProductStore } from "@/store/product-store"

import { CardItem } from "../homepage/products/card-item/card-item"
import { useEffect } from "react"

export function RelatedProducts() {
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <div>
      <h3 className="font-montserrat text-2xl lg:text-[34px] font-bold text-gray">
        TALVEZ POSSA LHE INTERESSAR
      </h3>
      <div className="flex items-center justify-between mt-8 overflow-x-auto whitespace-nowrap lg:overflow-x-clip lg:whitespace-normal">
        {products
          .slice(8, 12)
          .map(({ id, soldout, image, name, price: { value } }) => (
            <div key={id}>
              <CardItem
                soldout={soldout}
                id={id}
                image={image}
                name={name}
                price={value}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
