import { SlideProducts } from "./slide-products/slide-products"

export async function Products() {
  return (
    <section className="py-14 lg:py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-start lg:items-end">
          <p className="font-montserrat text-2xl lg:text-[34px] text-gray font-semibold">
            DESTAQUES
          </p>
          <button className="uppercase text-base lg:text-lg text-gray font-montserrat border-b border-primary01">
            Conferir tudo
          </button>
        </div>
        <SlideProducts />
      </div>
    </section>
  )
}
