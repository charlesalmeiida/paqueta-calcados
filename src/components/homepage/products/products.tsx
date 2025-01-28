import { SlideProducts } from "./slide-products/slide-products"

export async function Products() {

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
        <SlideProducts />
      </div>
    </section>
  )
}
