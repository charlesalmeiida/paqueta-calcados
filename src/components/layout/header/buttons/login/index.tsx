import Image from "next/image"

export function LogIn() {
  return (
    <button className="flex items-end gap-3">
      <Image
        src={"/svg/icon-login.svg"}
        width={28}
        height={28}
        alt="Ícone de login"
      />
      <span className="text-gray01 text-sm font-poppins">Entrar</span>
    </button>
  )
}
