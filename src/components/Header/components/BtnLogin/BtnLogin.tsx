import Image from "next/image"

export function BtnLogin() {
  return (
    <button className="flex relative items-end gap-3 text-secondaryLight font-poppins text-sm">
      <Image
        src={"/svg/icon-login.svg"}
        width={28}
        height={28}
        alt="Imagem de login"
      />
      Entrar
    </button>
  )
}
