import { BtnNumberShoes } from "@/components/Homepage/BtnNumberShoes"
import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import itemsBenefit from "@/data/itemsBenefit.json"
import Image from "next/image"
import numberShoes from "@/data/numberShoes.json"
import Link from "next/link"
import { BrandLogos } from "@/components/Homepage/BrandLogos"
import { InputCheckbox, InputForm } from "@/components/InputForm"
import { CarouselProducts } from "@/components/Homepage/CarouselProducts"
import { Hero } from "@/components/Homepage/Hero"
import { BannerShoes, ItemBenefit } from "@/components/Homepage"

export default function Home() {
  return (
    <>
      <Hero />

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
          </div>
          <div>
            <CarouselProducts />
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
          <div className="flex py-16 items-center justify-between relative">
            <Image
              src={"/svg/arrow.svg"}
              width={172}
              height={149}
              alt="Ícone de flecha"
              className="absolute left-[490px] top-40"
            />
            <div>
              <h3 className="font-montserrat text-[34px] font-bold text-light leading-[140%] max-w-[459px]">
                SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!
              </h3>
            </div>
            <div className="flex flex-col gap-10">
              <span className="text-light text-xl font-medium font-poppins">
                Nos informe o seu e-mail e nome para o melhor atendimento!
              </span>
              <div className="flex items-center gap-6 w-full">
                <InputForm type="email" />
                <InputForm type="name" />
              </div>
              <div className="flex items-center gap-10">
                <span className="text-light text-lg font-medium font-poppins">
                  Tenho interesse na categoria:
                </span>
                <div className="flex items-center gap-8">
                  <InputCheckbox>Masculina</InputCheckbox>
                  <InputCheckbox>Feminina</InputCheckbox>
                </div>
              </div>
              <Button>QUERO RECEBER</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
