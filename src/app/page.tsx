import { Button } from "@/components/button"
import { NumberShoes } from "@/components/homepage/numberShoes"
import { Products } from "@/components/homepage/products"
import iconsHero from "@/data/icons-hero.json"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <main>
        <section className="bg-hero py-32 bg-no-repeat bg-center bg-cover">
          <div className="flex justify-between container">
            <div></div>
            <div className="-mr-32">
              <h1 className="text-gray01">Tênis Casual</h1>
              <h2 className="text-primary01 -mt-8">Masculino</h2>
              <div className="mt-6">
                <span className="font-poppins text-2xl font-medium text-gray01 opacity-60">
                  A partir de
                </span>
                <h3 className="text-gray01 -mt-3 mb-4">R$ 79,99</h3>
                <Button>Aproveite</Button>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-linear01 py-16">
          <div className="container">
            <ul className="flex justify-between items-center">
              {iconsHero.map((icon) => (
                <li key={icon.name} className="flex items-center gap-5">
                  <Image
                    src={icon.icon}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                  />
                  <span
                    className={`text-light text-sm font-poppins block max-w-[165px]`}
                  >
                    {icon.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <section className="py-28">
        <div className="container space-y-28">
          <div className="flex justify-between items-start">
            <div className="relative">
              <Image
                src={"/img/woman-shoes.png"}
                width={668}
                height={622}
                alt="Foto de calçados femininos"
              />
              <span className="absolute z-10 text-light shadowText leading-normal font-poppins text-5xl bottom-20 left-14">
                CALÇADOS <br /> FEMININOS
              </span>
            </div>
            <div className="mt-40 text-right max-w-[628px]">
              <h5 className="mb-14 text-gray01">
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
          <div className="flex justify-between items-start">
            <div className="mt-40  max-w-[517px]">
              <h5 className="mb-14 text-gray01">
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
              <span className="absolute z-10 text-light shadowText leading-normal font-poppins text-5xl bottom-20 right-14 text-right">
                CALÇADOS <br /> MASCULINOS
              </span>
            </div>
          </div>
        </div>
      </section>

      <NumberShoes />

      <Products />
    </>
  )
}
