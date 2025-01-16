import Image from "next/image";

export function Topbar() {
  return (
    <div className="bg-linear01 py-4">
      <div className="container flex justify-between items-center">
        <span className="hidden sm:block font-poppins text-sm text-light">
          Loja de Calçados e Moda Online
        </span>
        <div className="flex items-center gap-6 sm:gap-14">
          <button className="flex items-center gap-3">
            <Image
              src={"/svg/icon-headphone.svg"}
              width={18}
              height={16}
              alt="Ícone de Fale conosco"
            />
            <span className="font-poppins text-sm text-light font-medium">
              Fale conosco
            </span>
          </button>
          <button className="flex items-center gap-3">
            <Image
              src={"/svg/icon-local.svg"}
              width={18}
              height={20}
              alt="Ícone de Fale conosco"
            />
            <span className="font-poppins text-sm text-light font-medium">
              Encontrar uma loja física
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}