import { BannerShoes } from "@/components/BannerShoes"
import { ItemBenefit } from "@/components/Benefits"
import { BtnNumberShoes } from "@/components/BtnNumberShoes"
import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { Header } from "@/components/Header"
import itemsBenefit from "@/data/itemsBenefit.json"
import Image from "next/image"
import numberShoes from "@/data/numberShoes.json"
import Link from "next/link"
import { ItemCard } from "@/components/ItemCard"
import { BrandLogos } from "@/components/BrandLogos"
import { InputForm } from "@/components/InputForm"

export default async function Home() {
  const data = await fetch("https://api.brchallenges.com/api/paqueta/shoes")
  const products = await data.json()

  return (
    <>
      <Header />

      <main>
        <section className="bg-bgBanner bg-no-repeat bg-center bg-cover object-cover">
          <div className="py-32 space-y-6 w-full flex flex-col items-end pr-56">
            <div>
              <div>
                <h1 className="font-poppins text-secondaryLight">
                  Tênis Casual
                </h1>
                <h2 className="font-poppins text-6xl -mt-7 opacity-80 text-primaryDark">
                  Masculino
                </h2>
              </div>
              <div className="flex flex-col mt-6 mb-8">
                <span className="font-poppins text-2xl opacity-60 text-secondaryLight font-medium">
                  A partir de
                </span>
                <strong className="text-5xl font-poppins font-bold text-secondaryLight">
                  R$ 79,99
                </strong>
              </div>
              <Button>aproveite</Button>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-linear py-16">
        <Container>
          <div className="flex justify-between items-center">
            <ItemBenefit width={53} height={39} image={itemsBenefit[0].image}>
              PAGUE EM ATÉ 10X <strong className="font-bold">SEM JUROS*</strong>
            </ItemBenefit>
            <ItemBenefit width={34} height={41} image={itemsBenefit[1].image}>
              <strong className="font-bold">RETIRE GRÁTIS</strong> EM NOSSAS
              LOJAS
            </ItemBenefit>
            <ItemBenefit width={39} height={41} image={itemsBenefit[2].image}>
              <strong className="font-bold">GANHE 20% DE DESCONTO*</strong>
            </ItemBenefit>
            <ItemBenefit width={47} height={47} image={itemsBenefit[3].image}>
              <strong className="font-bold">FRETE GRÁTIS</strong> PARA REGIÕES
              SUL E SUDESTE*
            </ItemBenefit>
            <ItemBenefit width={54} height={37} image={itemsBenefit[4].image}>
              PRIMEIRA TROCA GRÁTIS
            </ItemBenefit>
          </div>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <div className="space-y-28">
            <BannerShoes direction="left" gender="woman">
              Escolher o seu sapato favorito entre nossa{" "}
              <strong className="font-semibold">
                variedade de modelos e cores
              </strong>{" "}
              não será uma tarefa fácil, mas o que uma mulher não consegue
              fazer?
            </BannerShoes>
            <BannerShoes direction="right" gender="man">
              Tenha em seu guarda roupa sapatos de qualidade e confortáveis,
              para o dia a dia, trabalho e até mesmo para praticar esportes!
            </BannerShoes>
            <div className="w-[1314px] h-px bg-secondaryLight opacity-15"></div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex items-end justify-between">
            <Image
              src={"/img/logo-outlet.png"}
              width={398}
              height={154}
              alt="Logo Paquetá Calçados Outlet"
            />
            <p className="text-secondaryLight mb-8 font-montserrat text-[22px] leading-9 text-right max-w-xl">
              Você também pode escolher o seu novo sapato favorito de acordo com
              a sua numeração.
            </p>
          </div>
          <div className="mt-20 flex justify-between">
            {numberShoes.map((item) => (
              <BtnNumberShoes key={item.id}>{item.number}</BtnNumberShoes>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <div>
            <div className="flex items-end justify-between">
              <h2 className="text-secondary font-montserrat text-[34px] font-semibold">
                DESTAQUES
              </h2>
              <Link
                className="text-secondary font-montserrat text-lg border-b border-primary hover:border-primaryLight hover:text-secondary"
                href={"/"}
              >
                CONFERIR TUDO
              </Link>
            </div>
            <div className="mt-9 gap-10 flex">
              <ItemCard
                name={products[0].name}
                soldout={products[0].soldout === true ? true : false}
                image={products[0].image}
              />
              <ItemCard
                name={products[1].name}
                image={products[1].image}
                soldout={products[1].soldout === true ? true : false}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-48">
        <Container>
          <div className="space-y-20">
            <div>
              <h2 className="text-[34px] font-montserrat font-semibold text-secondary">
                AS MELHORES MARCAS ESTÃO AQUI!
              </h2>
            </div>
            <div>
              <BrandLogos />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-linear">
        <Container>
          <div className="flex items-center justify-around">
            <div className="py-16">
              <h3 className="font-montserrat text-[34px] font-bold text-light leading-[140%] max-w-[459px]">
                SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!
              </h3>
            </div>
            <div>
              <span className="text-light text-xl font-medium font-poppins">
                Nos informe o seu e-mail e nome para o melhor atendimento!
              </span>
              <InputForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
