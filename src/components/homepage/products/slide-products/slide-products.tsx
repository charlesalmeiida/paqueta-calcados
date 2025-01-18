"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { CardItem } from "../card-item/card-item"
import { useState } from "react"

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

interface SlideProps {
  productData: Product[]
}

export function SlideProducts({ productData }: SlideProps) {
  const [products, setProducts] = useState<Product[]>([])

  if (products.length === 0) {
    setProducts(productData)
  }

  return (
    <>
      <div className="mt-14">
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
          {products.slice(0, 8).map((product, index) => (
            <SwiperSlide key={index}>
              <CardItem
                name={product.name}
                price={product.price.value}
                image={product.image}
              />
            </SwiperSlide>
          ))}

          <div className="custom-pagination" />
        </Swiper>
      </div>
      <div className="custom-pagination flex mt-11 justify-center"></div>
      <style jsx global>{`
        .custom-pagination {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }
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
    </>
  )
}
