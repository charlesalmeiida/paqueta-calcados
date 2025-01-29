import { Breadcrumb } from "@/components/breadcrumb/breadcrumb"
import { AddToCart } from "@/components/button/add-to-cart"
import { HandleFavorites } from "@/components/button/handle-favorites"
import { Footer } from "@/components/layout/footer/footer"
import { Header } from "@/components/layout/header/header"
import { Item } from "@/store/product-store"
import Image from "next/image"

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id

  const data = await fetch(
    `https://api.brchallenges.com/api/paqueta/shoe/${id}`
  )

  const [
    {
      name,
      image,
      price: { value, discount },
      description,
      soldout,
    },
  ]: Item[] = await data.json()

  const priceBeforeDiscount = value * discount + value

  const totalDiscount = discount * 100

  const parcelas = value > 150 ? 10 : 9

  return (
    <>
      <Header />
      <section className="container py-20">
        <Breadcrumb pageName={name} />
        <div className="flex items-start mt-14">
          <Image
            className="-mt-40 -ml-20"
            src={image}
            width={835}
            height={835}
            alt={`Imagem do produto ${name}`}
          />
          <div>
            <HandleFavorites
              id={id}
              name={name}
              image={image}
              price={{ value }}
              soldout={soldout}
            />
            <div className="space-y-4">
              <h3 className="text-gray text-[40px] font-semibold font-montserrat">
                {name.toLocaleUpperCase()}
              </h3>
              <span className="block text-lg text-gray01 opacity-80 font-montserrat">
                Código do produto: {id}
              </span>
            </div>
            <div>
              {totalDiscount > 0 && (
                <div className="mt-12 flex items-center gap-6">
                  <span className="block font-montserrat text-[22px] text-gray01 line-through">
                    R${priceBeforeDiscount}
                  </span>
                  <span className="block bg-success text-light text-sm font-semibold font-montserrat px-4 rounded-sm">
                    {totalDiscount}% de desconto
                  </span>
                </div>
              )}
              <h2 className="text-[40px] mt-4 font-montserrat font-bold text-gray">
                R$ {value}
              </h2>
              <span className="font-montserrat text-gray01 opacity-60 font-medium text-xl">
                ou {parcelas}x de R$
                {(value / parcelas).toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div>
              <span>Escolha a numeração:</span>
            </div>
            <div className="mt-20">
              <AddToCart
                description={description}
                id={id}
                name={name}
                soldout={soldout}
                image={image}
                price={{ value, discount }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
