import { Topbar } from "@/components/layout/header/topbar/topbar"
import { LoginForm } from "@/components/login-form"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
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
      <div className="flex w-full justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </>
  )
}
