import { Breadcrumb } from "@/components/breadcrumb/breadcrumb"
import { Cart } from "@/components/cart/cart"
import { Topbar } from "@/components/layout/header/topbar/topbar"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  return (
    <>
      <Topbar />
      <div className="container relative flex justify-between items-center pt-4 pb-14">
        <Link className="-ml-4" href={"/"}>
          <Image
            src={"/img/logo.png"}
            width={297}
            height={86}
            alt="Logo do Paquetá Calçados"
          />
        </Link>
      </div>
      <section className="container">
        <Breadcrumb pageName="Sacola" />
        <div className="mt-16">
          <h3 className="text-[34px] text-gray font-bold">Sacola de compras</h3>
          <div className="bg-gray01 bg-opacity-5 p-10 rounded-md mt-10 flex gap-4">
            <span className="text-gray font-semibold text-2xl font-montserrat">
              Itens
            </span>
            <div>
              <Cart />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
