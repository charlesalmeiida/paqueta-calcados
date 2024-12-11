import Image from "next/image"

export function BrandLogos() {
  return (
    <div className="flex justify-between items-end">
      <Image
        src={"/svg/logo-adidas.svg"}
        width={127}
        height={86}
        alt="Logo da Adidas"
      />
      <Image
        src={"/svg/logo-viamarte.svg"}
        width={276}
        height={33}
        alt="Logo da ViaMarte"
      />
      <Image
        src={"/svg/logo-bebece.svg"}
        width={212}
        height={57}
        alt="Logo da Bebecê"
      />
      <Image
        src={"/svg/logo-dumond.svg"}
        width={231}
        height={46}
        alt="Logo da Dumond"
      />
    </div>
  )
}
