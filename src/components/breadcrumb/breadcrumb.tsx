import Image from "next/image"
import Link from "next/link"

interface BreadcrumbProps {
  pageName: string
}

export function Breadcrumb({ pageName }: BreadcrumbProps) {
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
        <span className="font-medium text-lg line-clamp-1 font-montserrat text-gray01 border-b border-primary01">
          {pageName}
        </span>
      </span>
    </div>
  )
}
