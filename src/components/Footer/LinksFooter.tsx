import Link from "next/link"
import linksFooter from "@/data/linksFooter.json"

interface LinksFooterProps {
  id: number
}

export function LinksFooter({ id }: LinksFooterProps) {
  return (
    <div className="space-y-3">
      <h5 className="font-montserrat text-lg font-bold text-secondaryLight">
        {linksFooter[id].name}
      </h5>
      {linksFooter[id].links.map((link) => (
        <Link
          key={link}
          className="text-sm block text-secondaryLight font-montserrat opacity-6 hover:opacity-90"
          href={"/"}
        >
          {link}
        </Link>
      ))}
    </div>
  )
}
