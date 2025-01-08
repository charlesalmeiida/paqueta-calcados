"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { CardItem } from "./cardItem"
import { Pagination } from "swiper/modules"
import { useEffect, useState } from "react"
import { api } from "@/services/api"

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

export function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api
      .get("/shoes")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <section className="py-28">
      <div className="container">
        <div className="flex justify-between flex-end">
          <p className="font-montserrat text-[34px] text-gray font-semibold">
            DESTAQUES
          </p>
          <button className="uppercase text-lg text-gray font-montserrat border-b border-primary01">
            Conferir tudo
          </button>
        </div>
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
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <SwiperSlide>
                    <CardItem
                      name={product.name}
                      price={product.price.value}
                      image={product.image}
                    />
                  </SwiperSlide>
                </li>
              ))}
            </ul>
            <div className="custom-pagination" />
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
    </section>
  )
}
