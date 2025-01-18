import Image from "next/image";

export function Cart() {
  return (
    <button className="flex items-end gap-3">
          <Image
            src={"/svg/icon-bag.svg"}
            width={26}
            height={26}
            alt="Ícone de sacola"
          />
          <span className="text-gray01 text-sm font-poppins">Sacola</span>
        </button>
  )
}