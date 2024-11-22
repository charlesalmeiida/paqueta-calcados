import Image from "next/image"

interface BtnHeaderProps {
  type: "list" | "cart" | "login"
}

export function BtnHeader({ type }: BtnHeaderProps) {
  return (
    <button className="flex gap-3 items-end">
      <Image
        src={
          type === "list"
            ? "/svg/icon-heart.svg"
            : type === "cart"
            ? "/svg/icon-bag.svg"
            : type === "login"
            ? "/svg/icon-login.svg"
            : ""
        }
        width={28}
        height={28}
        alt={
          type === "list"
            ? "Ícone de lista de desejos"
            : type === "cart"
            ? "Ícone de Sacola"
            : type === "login"
            ? "Ícone de Entrar"
            : ""
        }
      />
      <span className="font-poppins text-sm text-secondaryLight hover:text-primary">
        {type === "list"
          ? "Lista de desejos"
          : type === "cart"
          ? "Sacola"
          : type === "login"
          ? "Entrar"
          : ""}
      </span>
    </button>
  )
}
