import { Breadcrumb } from "@/components/breadcrumb/breadcrumb"
import Image from "next/image"

interface Item {
  name: string
  price: {
    value: number
    discount: number
  }
  image: string
  description: string
}

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
    },
  ]: Item[] = await data.json()

  const priceBeforeDiscount = value * discount + value

  const totalDiscount = discount * 100

  return (
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
          <div>
            <button>
              <Image
                src={"/svg/icon-fav-product.svg"}
                width={35}
                height={31}
                alt="Ícone de adicionar aos favoritos"
              />
            </button>
            <div className="space-y-4">
              <h3 className="text-gray text-[40px] font-semibold font-montserrat">
                {name.toLocaleUpperCase()}
              </h3>
              <span className="block text-lg text-gray01 opacity-80 font-montserrat">
                Código do produto: {id}
              </span>
            </div>
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
            <h2>R$ {value}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
