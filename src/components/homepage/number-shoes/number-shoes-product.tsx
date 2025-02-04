"use client"

import { useProductStore } from "@/store/product-store"

const avaibleNumbers = [34, 35, 36, 37, 38, 39, 40]

export function NumberShoesProduct({ productId }: { productId: string }) {
  const { selectedNumbers, setSelectedNumber } = useProductStore()
  const selectedNumber = selectedNumbers[productId] || null

  return (
    <div>
      <span className="text-lg font-montserrat text-gray01 placeholder-opacity-80">
        Escolha a numeração:
      </span>
      <div className="mt-5">
        <ul className="flex gap-8 items-center">
          {avaibleNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => setSelectedNumber(productId, number)}
                className={`border rounded-sm ${
                  selectedNumber === number
                    ? "border-primary01"
                    : "border-gray01"
                } flex opacity-70 items-center justify-center w-fit p-2 hover:border-primary01 group`}
              >
                <span
                  className={`${
                    selectedNumber === number ? "text-primary01" : "text-gray01"
                  } group-hover:text-primary01 font-montserrat text-[22px] font-medium`}
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
