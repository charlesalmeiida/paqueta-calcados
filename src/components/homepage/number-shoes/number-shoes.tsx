import Image from "next/image"

const avaibleNumber = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

export function NumberShoes() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-end">
          <Image
            src={"/img/logo-outlet.png"}
            width={398}
            height={154}
            alt="Logo Paquetá Outlet"
          />
          <p className="text-gray01 mb-9  max-w-[588px] text-[22px] font-montserrat text-right">
            Você também pode escolher o seu novo sapato favorito de acordo com a
            sua numeração.
          </p>
        </div>
        <div className="mt-20">
          <ul className="flex justify-between items-center">
            {avaibleNumber.map((number) => (
              <li key={number}>
                <button className="border rounded-sm border-gray01 flex opacity-70 items-center justify-center w-fit p-5 hover:border-primary01 group">
                  <span className="text-gray01 font-montserrat text-[22px] group-hover:text-primary01 font-medium">
                    {number}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
