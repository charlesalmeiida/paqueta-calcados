"use client"

import { ItemCard } from "../ItemCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { useEffect, useState } from "react"
import { Pagination } from "swiper/modules"

interface Products {
  id: number
  name: string
  image: string
  soldout: boolean
  price: {
    value: number
  }
}

export function CarouselProducts() {
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://api.brchallenges.com/api/paqueta/shoes")
      const data = await res.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <div className="mt-9 h-[450px] gap-10 flex">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.slice(0, 8).map((product: Products) => (
            <SwiperSlide key={product.id}>
              <ItemCard
                name={product.name}
                image={product.image}
                soldout={product.soldout}
                value={product.price.value}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-pagination flex mt-11 justify-center"></div>
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 44px;
          height: 5px;
          background-color: #383838;
          margin-right: 8px;
          opacity: 0.3;
          border-radius: 7px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #383838;
          opacity: 1;
          width: 48px;
        }
      `}</style>
    </div>
  )
}
