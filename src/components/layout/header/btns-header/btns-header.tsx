"use client"

import { useState } from "react"
import { Cart } from "../buttons/cart/cart"
import { BtnFavorites } from "../buttons/favorites/favorites"
import { LogIn } from "../buttons/login/login"
import { Turn as Hamburger } from "hamburger-react"
import { MenuMobile } from "../menu-mobile/menu-mobile"

export function ButtonsHeader() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="md:hidden">
        <Hamburger toggled={isOpen} color="#121212" toggle={setOpen} />
      </div>
      <div className="items-center gap-10 hidden md:flex">
        <BtnFavorites />
        <Cart />
        <LogIn />
      </div>
      {isOpen && <MenuMobile />}
    </>
  )
}
