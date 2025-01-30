import { Breadcrumb } from "@/components/breadcrumb/breadcrumb"
import { AddToCart } from "@/components/button/add-to-cart"
import { HandleFavorites } from "@/components/button/handle-favorites"
import { NumberShoesProduct } from "@/components/homepage/number-shoes/number-shoes-product"
import { Footer } from "@/components/layout/footer/footer"
import { Header } from "@/components/layout/header/header"
import { Item } from "@/store/product-store"
import Image from "next/image"
import Link from "next/link"

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
                Código do produto: {id.split("-")[0]}
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
            <div className="mt-12">
              <NumberShoesProduct />
            </div>
            <button className="text-gray01 text-base font-montserrat opacity-60 font-bold mt-8">
              Guia de tamanhos
            </button>
            <div className="mt-14">
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
        <div className="-mt-20">
          <span className="text-lg font-montserrat text-gray01 opacity-80">
            Compartilhe
          </span>
          <ul className="flex items-center gap-4 mt-3">
            <li>
              <Link href={"/"}>
                <Image
                  src={"/svg/logo-instagram.svg"}
                  width={24}
                  height={24}
                  alt="Logo Instagram"
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={"/svg/logo-facebook.svg"}
                  width={14}
                  height={25}
                  alt="Logo Facebook"
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={"/svg/logo-twitter.svg"}
                  width={28}
                  height={22}
                  alt="Logo Twitter"
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={"/svg/logo-youtube.svg"}
                  width={29}
                  height={20}
                  alt="Logo YouTube"
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={"/svg/logo-pinterest.svg"}
                  width={22}
                  height={25}
                  alt="Logo Pinterest"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-14">
          <h4 className="text-gray font-montserrat text-[40px] font-semibold">
            DESCRIÇÃO DO PRODUTO
          </h4>
          <p className="font-montserrat mt-4 text-gray01 text-[22px] font-light leading-10 max-w-6xl">
            {description}
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
