import Image from "next/image"

interface InputProps {
  type: "email" | "text"
  placeholder: string
}

export function Input({ type, placeholder }: InputProps) {
  return (
    <div className="flex gap-4 border-b-2 border-light pb-2 max-w-[300px] flex-1">
      <Image
        src={type === "email" ? "/svg/icon-mail.svg" : "/svg/icon-person.svg"}
        width={20}
        height={16}
        alt="Ícone do input"
      />
      <input
        className="bg-transparent placeholder:text-light placeholder:font-poppins placeholder:text-lg placeholder:opacity-60 placeholder:focus:opacity-100 focus:outline-none w-full"
        type={type}
        placeholder={placeholder}
        id={type === "email" ? "email" : "name"}
        name={type === "email" ? "email" : "name"}
      />
    </div>
  )
}
