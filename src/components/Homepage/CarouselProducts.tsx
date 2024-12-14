"use client"

import { ItemCard } from "../ItemCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { useItemStore } from "@/store/itemStore"
import { useEffect } from "react"

export function CarouselProducts() {
  const items = useItemStore((state) => state.availableItems)
  const fetchAvailableItems = useItemStore((state) => state.fetchAvailableItems)

  useEffect(() => {
    fetchAvailableItems()
  }, [fetchAvailableItems])

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
          {items.slice(0, 8).map((product) => (
            <SwiperSlide key={product.id}>
              <ItemCard
                name={product.name}
                image={product.image}
                soldout={product.soldout}
                value={product.price.value}
                product={product}
                link={`/produto/${product.name
                  .toLowerCase()
                  .replace(/ /g, "-")}?id=${product.id}`}
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
