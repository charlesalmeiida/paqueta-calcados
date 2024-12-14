import Image from "next/image"
import Link from "next/link"

interface BreadcrumbProps {
  children: React.ReactNode
}

export function Breadcrumb({ children }: BreadcrumbProps) {
  return (
    <div className="flex gap-4 items-center font-montserrat text-secondaryLight text-lg">
      <Link className="opacity-60" href={"/"}>
        Paquetá
      </Link>
      <Image src={"/svg/icon-chevron.svg"} width={5} height={9} alt="Seta" />
      <span className="font-medium border-b border-primaryDark">
        {children}
      </span>
    </div>
  )
}
