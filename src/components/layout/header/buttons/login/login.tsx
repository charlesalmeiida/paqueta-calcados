import Image from "next/image"
import { redirect } from "next/navigation"

const goToLogin = () => {
  redirect("/entrar")
}

export function LogIn() {
  return (
    <button className="flex items-end gap-3" onClick={goToLogin}>
      <Image
        src={"/svg/icon-login.svg"}
        width={28}
        height={28}
        alt="Ícone de login"
      />
      <span className="text-gray01 text-sm font-poppins hover:text-primary01">Entrar</span>
    </button>
  )
}
