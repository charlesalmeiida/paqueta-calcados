import Image from "next/image"
import Link from "next/link"

interface BreadcrumbProps {
  children: React.ReactNode
}

export function Breadcrumb({ children }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-4">
      <Link
        className="font-montserrat text-lg text-gray01 opacity-60"
        href={"/"}
      >
        Paquetá
      </Link>
      <Image src={"/svg/chevron-right.svg"} width={5} height={9} alt="Seta" />
      <span>
        <span className="font-medium text-lg font-montserrat text-gray01 border-b border-primary01">
          {children}
        </span>
      </span>
    </div>
  )
}
