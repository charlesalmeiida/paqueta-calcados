const avaibleNumbers = [34, 35, 36, 37, 38, 39, 40]

export function NumberShoesProduct() {
  return (
    <div>
      <span className="text-lg font-montserrat text-gray01 placeholder-opacity-80">
        Escolha a numeração:
      </span>
      <div className="mt-5">
        <ul className="flex gap-8 items-center">
          {avaibleNumbers.map((number) => (
            <li key={number}>
              <button className="border rounded-sm border-gray01 flex opacity-70 items-center justify-center w-fit p-2 hover:bg-slate-200">
                <span className="text-gray01 font-montserrat text-[22px] font-medium">
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
