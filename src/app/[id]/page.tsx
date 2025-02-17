import { Breadcrumb } from "@/components/breadcrumb/breadcrumb"
import { AddToCart } from "@/components/button/add-to-cart"
import { HandleFavorites } from "@/components/button/handle-favorites"
import { NumberShoesProduct } from "@/components/homepage/number-shoes/number-shoes-product"
import { Header } from "@/components/layout/header/header"
import { RelatedProducts } from "@/components/product-page/related-products"
import { Item } from "@/store/product-store"
import Image from "next/image"
import { ModalEmail } from "@/components/product-page/modal-email"
import { SizesGuide } from "@/components/button/sizes-guide"
import { ShareOnSocials } from "@/components/product-page/share-on-socials"

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
      <section className="container py-14 lg:py-20">
        <Breadcrumb pageName={name} />
        <div className="flex flex-col lg:flex-row items-start mt-14">
          <Image
            className="-mt-20 lg:-mt-40 lg:-ml-20"
            src={image}
            width={835}
            height={835}
            alt={`Imagem do produto ${name}`}
          />
          <div className="container lg:w-1/2">
            <HandleFavorites
              quantity={1}
              id={id}
              name={name}
              image={image}
              price={{ value }}
              soldout={soldout}
            />
            <div className="space-y-4">
              <h3 className="text-gray text-3xl lg:text-[40px] max-w-[547px] font-semibold font-montserrat">
                {name.toLocaleUpperCase()}
              </h3>
              <span className="block text-lg text-gray01 opacity-80 font-montserrat">
                Código do produto: {id.split("-")[0]}
              </span>
            </div>
            <div>
              {soldout ? (
                <div className="mt-8">
                  <span className="text-[40px] mt-4 font-montserrat font-bold text-gray">
                    Produto esgotado
                  </span>
                </div>
              ) : (
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
                  <div className="mt-12">
                    <NumberShoesProduct productId={id} />
                  </div>
                  <SizesGuide />
                </div>
              )}
            </div>
            <div className="mt-6 lg:mt-14">
              <AddToCart
                quantity={1}
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
        <ShareOnSocials />
        <div className="mt-14">
          <h4 className="text-gray font-montserrat text-3xl lg:text-[40px] font-semibold">
            DESCRIÇÃO DO PRODUTO
          </h4>
          <p className="font-montserrat mt-4 text-gray01 text-lg lg:text-[22px] font-light lg:leading-10 max-w-6xl">
            {description}
          </p>
        </div>
        <div className="mt-10 lg:mt-52">
          <RelatedProducts />
        </div>
      </section>
      <ModalEmail />
    </>
  )
}
