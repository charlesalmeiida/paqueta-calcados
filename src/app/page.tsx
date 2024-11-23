import { BannerShoes } from "@/components/BannerShoes"
import { ItemBenefit } from "@/components/Benefits"
import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { Header } from "@/components/Header"
import itemsBenefit from "@/data/itemsBenefit.json"

export default function Home() {
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
    </>
  )
}
