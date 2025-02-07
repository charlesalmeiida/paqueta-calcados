"use client"

import { Button } from "@/components/button/button"
import { Checkbox } from "@/components/form/checkbox/checkbox"
import { Input } from "@/components/form/input/input"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export function Newsletter() {
  const { toast } = useToast()

  const handleToast = () => {
    toast({
      title: "E-mail cadastrado com sucesso!",
    })
  }

  return (
    <section className="bg-linear01 py-14 lg:py-16">
      <div className="container relative flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:max-w-[459px]">
          <h3 className="text-light text-2xl lg:text-[34px] text-center lg:text-left font-semibold lg:leading-[47px] font-montserrat">
            SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!
          </h3>
        </div>
        <div className="hidden xl:block absolute bottom-0 left-[450px] 2xl:left-[675px]">
          <Image src={"/svg/arrow.svg"} width={172} height={149} alt="Seta" />
        </div>
        <form action={handleToast}>
          <div className="space-y-10 mt-6 lg:mt-0">
            <div className="space-y-10">
              <span className="text-light inline-block text-lg lg:text-xl font-medium font-poppins">
                Nos informe o seu e-mail e nome para o melhor atendimento!
              </span>
              <div className="flex flex-col lg:flex-row gap-7 items-start lg:items-center">
                <Input required type="email" placeholder="maria@seuemail.com" />
                <Input required type="text" placeholder="Maria da Silva" />
              </div>
            </div>
            <div>
              <div className="mt-6 flex flex-col lg:flex-row items-center gap-8">
                <span className="font-poppins text-lg text-light">
                  Tenho interesse na categoria:
                </span>
                <div className="flex items-center gap-8">
                  <Checkbox gender="male">Masculina</Checkbox>
                  <Checkbox gender="female">Feminina</Checkbox>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button type="submit">Quero receber</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
