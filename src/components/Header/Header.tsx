import Image from "next/image"
import { Container } from "../Container"
import { Topbar } from "./Topbar"
import Link from "next/link"
import linksNav from "@/data/linksNav.json"
import { BtnFavorites } from "./components/BtnFavorites"

export function Header() {
  return (
    <header>
      <Topbar />
      <Container>
        <div>
          <div className="flex pt-4 items-center justify-between">
            <Link className="-ml-4" href={"/"}>
              <Image
                src="/img/logo.png"
                width={297}
                height={86}
                alt="Logo Paqueta Calcados"
              />
            </Link>
            <div className="flex gap-10">
              <BtnFavorites />
            </div>
          </div>
          <nav>
            <ul className="flex justify-between mt-11 pb-4">
              {linksNav.map((link) => (
                <li key={link.page}>
                  <Link
                    className="font-poppins text-lg font-medium text-secondaryLight hover:text-primary"
                    href={link.link}
                  >
                    {link.page}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
