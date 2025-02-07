"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { CardItem } from "../card-item/card-item"
import { useEffect } from "react"
import { useProductStore } from "@/store/product-store"

export function SlideProducts() {
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [products])

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
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 1.8,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.2,
            },
            1280: {
              slidesPerView: 4.5,
            },
          }}
          className="mySwiper"
        >
          {products
            .slice(0, 8)
            .map(({ id, name, price, image, soldout }, index) => (
              <SwiperSlide key={index}>
                <CardItem
                  id={id}
                  name={name}
                  price={price.value}
                  image={image}
                  soldout={soldout}
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
