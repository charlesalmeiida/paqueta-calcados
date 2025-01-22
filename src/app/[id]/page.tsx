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

  const [item]: Item[] = await data.json()

  return (
    <section className="container py-14">
      <Breadcrumb>{item.name}</Breadcrumb>
      <div>
        <Image
          className="-mt-40 -ml-20"
          src={item.image}
          width={835}
          height={835}
          alt={`Imagem do produto ${item.name}`}
        />
      </div>
    </section>
  )
}
