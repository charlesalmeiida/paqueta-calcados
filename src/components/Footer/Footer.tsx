import Image from "next/image"
import { Container } from "../Container"
import { LinksFooter } from "./LinksFooter"
import logoPayments from "@/data/LogosPayments.json"
import logoSocials from "@/data/logosSocials.json"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="pt-16 bg-secondaryLight bg-opacity-10">
      <Container>
        <div className="flex justify-between">
          <LinksFooter id={0} />
          <LinksFooter id={1} />
          <div className="space-y-8 max-w-72">
            <LinksFooter id={2} />
            <LinksFooter id={3} />
            <LinksFooter id={4} />
          </div>
          <div className="space-y-12">
            <div>
              <h5 className="font-montserrat text-lg font-bold text-secondaryLight">
                Formas de pagamento
              </h5>
              <div className="grid grid-cols-3 gap-6 mt-6 items-center justify-center">
                {logoPayments.map((logo) => (
                  <Image
                    className="mx-auto"
                    key={logo.image}
                    src={logo.image}
                    width={logo.width}
                    height={logo.height}
                    alt="Logo de pagamento"
                  />
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-montserrat text-lg font-bold text-secondaryLight">
                Redes Sociais
              </h5>
              <div className="flex gap-4 items-center">
                {logoSocials.map((logo) => (
                  <Link key={logo.logo} href={"/"}>
                    <Image
                      className="mx-auto mt-4"
                      src={logo.logo}
                      width={logo.width}
                      height={logo.height}
                      alt="Logo de rede social"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h5 className="font-montserrat text-lg font-bold text-secondaryLight">
                Prêmios e Certificações
              </h5>
              <Image
                src={"/img/selo-ebit.png"}
                className="mt-3"
                width={70}
                height={95}
                alt="Logo da Ebit"
              />
            </div>
            <div>
              <h5 className="font-montserrat text-lg font-bold text-secondaryLight">
                Segurança
              </h5>
              <Image
                src={"/img/selo-site-blindado.png"}
                className="mt-3"
                width={115}
                height={32}
                alt="Logo de site blindado"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-secondaryLight mt-20 py-10 flex items-center justify-center gap-7">
        <h5 className="font-montserrat text-xl font-medium text-light">
          UMA EMPRESA DO GRUPO
        </h5>
        <Image
          src={"/img/logo-paqueta-company.png"}
          width={265}
          height={59}
          alt="Logo do Grupo Paquetá Calçados"
        />
      </div>
    </footer>
  )
}
