import Image from "next/image"

interface itemsBenefitProps {
  children: React.ReactNode
  image: string
  width: number
  height: number
}

export function ItemBenefit({
  children,
  image,
  width,
  height,
}: itemsBenefitProps) {
  return (
    <div className="flex gap-5 items-center">
      <Image src={image} width={width} height={height} alt="Ícone de cartão" />
      <span className="font-poppins text-sm max-w-32 text-light uppercase">
        {children}
      </span>
    </div>
  )
}
