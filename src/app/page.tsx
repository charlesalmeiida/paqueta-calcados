import { Button } from "@/components/button/button"
import { NumberShoes } from "@/components/homepage/number-shoes/number-shoes"
import { Products } from "@/components/homepage/products/products"
import iconsHero from "@/data/icons-hero.json"
import Image from "next/image"
import brands from "@/data/brands.json"
import { Input } from "@/components/form/input/input"
import { Checkbox } from "@/components/form/checkbox/checkbox"

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
              {iconsHero.map(({ icon, name, alt, width, height }) => (
                <li key={name} className="flex items-center gap-5">
                  <Image src={icon} alt={alt} width={width} height={height} />
                  <span
                    className={`text-light text-sm font-poppins block max-w-[165px]`}
                  >
                    {name}
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

      <section className="pb-28">
        <div className="container">
          <div className="space-y-14">
            <h3 className="text-gray text-[34px] font-semibold font-montserrat">
              AS MELHORES MARCAS ESTÃO AQUI!
            </h3>
            <div>
              <ul className="flex justify-between items-end">
                {brands.map(({ logo, width, height }) => (
                  <li key={logo}>
                    <Image
                      src={logo}
                      width={width}
                      height={height}
                      alt="Imagem da marca"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear01 py-16">
        <div className="container relative flex justify-between items-center">
          <div className="max-w-[459px]">
            <h3 className="text-light text-[34px] font-semibold font-montserrat">
              SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!
            </h3>
          </div>
          <div className="absolute bottom-0 left-[675px]">
            <Image src={"/svg/arrow.svg"} width={172} height={149} alt="Seta" />
          </div>
          <div className="space-y-10">
            <div className="space-y-10">
              <span className="text-light text-xl font-medium font-poppins">
                Nos informe o seu e-mail e nome para o melhor atendimento!
              </span>
              <div className="flex gap-7 items-center">
                <Input type="email" placeholder="maria@seuemail.com" />
                <Input type="text" placeholder="Maria da Silva" />
              </div>
            </div>
            <div>
              <div className="mt-6 flex items-center gap-8">
                <span className="font-poppins text-lg text-light">
                  Tenho interesse na categoria:
                </span>
                <div className="flex items-center gap-8">
                  <Checkbox gender="male">Masculina</Checkbox>
                  <Checkbox gender="female">Feminina</Checkbox>
                </div>
              </div>
            </div>
            <Button>Quero receber</Button>
          </div>
        </div>
      </section>
    </>
  )
}
