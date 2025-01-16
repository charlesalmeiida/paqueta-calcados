import Image from "next/image"
import { Topbar } from "./topbar"
import { BtnFavorites } from "./buttons/favorites"
import { Cart } from "./buttons/cart"
import { LogIn } from "./buttons/login"
import navLinks from "@/data/nav-links.json"
import Link from "next/link"
import { ButtonsHeader } from "./btnsHeader"

export function Header() {
  return (
    <header className="shadow-shape">
      <Topbar />
      <div className="container flex justify-between items-center pt-4 pb-10">
        <Link className="-ml-4" href={"/"}>
          <Image
            src={"/img/logo.png"}
            width={297}
            height={86}
            alt="Logo do Paquetá Calçados"
          />
        </Link>
        <ButtonsHeader />
      </div>
      {/* <div className="container pb-4">
        <nav>
          <ul className="flex justify-between">
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
      </div> */}
    </header>
  )
}
