import { getProducts } from "@/services/getProducts"
import { SlideProducts } from "./slideProducts"

export async function Products() {
  const products = await getProducts()

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
        <SlideProducts productData={products} />
      </div>
    </section>
  )
}
