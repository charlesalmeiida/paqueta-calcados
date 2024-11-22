import Image from "next/image"
import { Container } from "../Container"

export function Topbar() {
  return (
    <div className="bg-linear">
      <Container>
        <div className="py-4 flex justify-between">
          <div>
            <span className="font-poppins text-sm text-light">
              Loja de Calçados e Moda Online
            </span>
          </div>
          <div className="flex gap-14">
            <button className="flex gap-3">
              <Image
                src={"/svg/icon-talk.svg"}
                width={18}
                height={16}
                alt="Ícone fale conosco"
              />
              <span className="text-light text-sm font-medium font-poppins">
                Fale conosco
              </span>
            </button>
            <button className="flex gap-3">
              <Image
                src={"/svg/icon-location.svg"}
                width={18}
                height={16}
                alt="Ícone localização"
              />
              <span className="text-light text-sm font-medium font-poppins">
                Fale conosco
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
