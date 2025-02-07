import Image from "next/image"
import { Topbar } from "./topbar/topbar"
import navLinks from "@/data/nav-links.json"
import Link from "next/link"
import { ButtonsHeader } from "./btns-header/btns-header"

export function Header() {
  return (
    <>
      <Topbar />
      <header className="shadow-shape sticky top-0 z-50 bg-light">
        <div className="container relative flex justify-between items-center pt-4 pb-8 md:pb-10">
          <Link className="md:-ml-4" href={"/"}>
            <Image
              src={"/img/logo.png"}
              width={297}
              height={86}
              alt="Logo do Paquetá Calçados"
              className="w-40 lg:w-72"
            />
          </Link>
          <ButtonsHeader />
        </div>
        <div className="container pb-4">
          <nav>
            <ul className="flex gap-8 md:gap-4 overflow-x-auto whitespace-nowrap sm:justify-between">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins text-lg font-medium text-gray01 transition-all hover:text-primary01"
                >
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
