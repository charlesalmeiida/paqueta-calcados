import Image from "next/image"
import brands from "@/data/brands.json"

export function LogoBrands() {
  return (
    <section className="pb-14 lg:pb-28">
      <div className="container">
        <div className="space-y-14">
          <h3 className="text-gray text-3xl lg:text-[34px] font-semibold font-montserrat">
            AS MELHORES MARCAS ESTÃO AQUI!
          </h3>
          <div>
            <ul className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:items-end">
              {brands.map(({ logo, width, height }, index) => (
                <li key={index}>
                  <Image
                    src={logo}
                    width={width}
                    height={height}
                    alt="Imagem da marca"
                    className="max-w-40 lg:max-w-full"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
