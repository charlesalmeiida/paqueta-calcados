import Image from "next/image"
import { RemoveFromCart } from "../button/remove-from-cart"

interface ItemCartProps {
  image: string
  name: string
  id: string
  price: number
}

export function ItemCart({ image, name, id, price }: ItemCartProps) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-16">
        <Image
          src={image}
          width={219}
          height={258}
          alt="Imagem do produto"
          className="flex-1"
        />
        <div>
          <h2 className="text-[38px] uppercase text-gray font-bold font-montserrat">
            {name}
          </h2>
          <span className="text-gray01 opacity-80 text-lg font-montserrat">
            Código do produto: {id}
          </span>
          <div className="mt-5 space-y-3 font-montserrat text-xl text-gray01">
            <p>
              <strong>Numeração: </strong> 39
            </p>
            <p>
              <strong>Cor: </strong> Preto
            </p>
            <p>
              <strong>Quantidade: </strong> 1
            </p>
            <p>
              <strong>Preço: </strong> R$ {price.toLocaleString("pt-BR")}
            </p>
          </div>
        </div>
      </div>
      <RemoveFromCart productId={id} />
    </div>
  )
}
