"use client"

import { useProductStore } from "@/store/product-store"

export function NumberShoesProduct() {
  const { avaibleNumbers } = useProductStore()

  return (
    <div>
      <span className="text-lg font-montserrat text-gray01 placeholder-opacity-80">
        Escolha a numeração:
      </span>
      <div className="mt-5">
        <ul className="flex gap-8 items-center">
          {avaibleNumbers.map((number, index) => (
            <li key={index}>
              <button
                className={`border rounded-sm  flex opacity-70 items-center justify-center w-fit p-2 hover:border-primary01 group`}
              >
                <span
                  className={`group-hover:text-primary01 font-montserrat text-[22px] font-medium`}
                >
                  {number}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
