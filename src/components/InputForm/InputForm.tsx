import Image from "next/image"

interface InputFormProps {
  type: "name" | "email"
}

export function InputForm({ type }: InputFormProps) {
  return (
    <div className="flex flex-1 items-center gap-4 border-b max-w-[300px] border-light">
      <Image
        src={type === "name" ? "/svg/icon-person.svg" : "/svg/icon-mail.svg"}
        width={20}
        height={16}
        alt={`Ícone ${type}`}
        className="pb-2"
      />
      <input
        type={type}
        name={type}
        id={type}
        placeholder={type === "name" ? "Maria da Silva" : "maria@seuemail.com"}
        className="bg-transparent placeholder:text-light text-light placeholder:font-poppins placeholder:text-lg w-full placeholder:opacity-60 outline-none pb-2"
      />
    </div>
  )
}
