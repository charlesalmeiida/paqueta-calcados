import { Button } from "@/components/button/button"
import Image from "next/image"

export function SectionBanners() {
  return (
    <section className="py-14 lg:py-28">
      <div className="container space-y-10 lg:space-y-28">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="relative">
            <Image
              src={"/img/woman-shoes.png"}
              width={668}
              height={622}
              alt="Foto de calçados femininos"
            />
            <span className="absolute z-10 text-light shadowText leading-normal font-poppins text-3xl lg:text-5xl bottom-6 lg:bottom-20 left-6 lg:left-14">
              CALÇADOS <br /> FEMININOS
            </span>
          </div>
          <div className="mt-6 lg:mt-40 text-center lg:text-right max-w-[628px]">
            <h5 className="mb-6 lg:mb-14 text-gray01">
              Escolher o seu sapato favorito entre nossa{" "}
              <strong className="font-semibold">
                variedade de modelos e cores
              </strong>{" "}
              não será uma tarefa fácil, mas o que uma mulher não consegue
              fazer?{" "}
            </h5>
            <Button>Conferir</Button>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start">
          <div className="mt-6 text-center lg:text-left lg:mt-40 max-w-[517px]">
            <h5 className="mb-6 lg:mb-14 text-gray01">
              Tenha em seu guarda roupa sapatos de qualidade e confortáveis,
              para o dia a dia, trabalho e até mesmo para praticar esportes!
            </h5>
            <Button>Conferir</Button>
          </div>
          <div className="relative">
            <Image
              src={"/img/men-shoes.png"}
              width={668}
              height={622}
              alt="Foto de calçados masculinos"
            />
            <span className="absolute z-10 text-light shadowText leading-normal font-poppins text-3xl lg:text-5xl lg:bottom-20 bottom-6 right-6 lg:right-14 text-right">
              CALÇADOS <br /> MASCULINOS
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
