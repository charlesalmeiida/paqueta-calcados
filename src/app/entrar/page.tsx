import { Footer } from "@/components/layout/footer/footer"
import { Topbar } from "@/components/layout/header/topbar/topbar"
import { LoginForm } from "@/components/login-form"
import Image from "next/image"
import Link from "next/link"

export default function SignInPage() {
  return (
    <>
      <Topbar />
      <div className="container relative flex justify-between items-center pt-4 pb-4">
        <Link className="-ml-4" href={"/"}>
          <Image
            src={"/img/logo.png"}
            width={297}
            height={86}
            alt="Logo do Paquetá Calçados"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center p-4 gap-6 bg-muted  md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6 mt-20">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  )
}
