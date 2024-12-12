"use client"

import Image from "next/image"
import { Container } from "../Container"
import { Topbar } from "./Topbar"
import Link from "next/link"
import linksNav from "@/data/linksNav.json"
import { BtnFavorites } from "./components/BtnFavorites"
import { BtnCart } from "./components/BtnCart"
import { BtnLogin } from "./components/BtnLogin"
import { useEffect, useState } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Topbar />
      <header
        className={`sticky top-0 z-50 bg-light ${
          isScrolled ? "shadow-shadowShape" : ""
        }`}
      >
        <Container>
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
              <BtnCart />
              <BtnLogin />
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
        </Container>
      </header>
    </>
  )
}
