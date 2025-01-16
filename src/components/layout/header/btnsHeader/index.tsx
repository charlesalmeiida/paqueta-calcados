"use client"

import { useState } from "react"
import { Cart } from "../buttons/cart"
import { BtnFavorites } from "../buttons/favorites"
import { LogIn } from "../buttons/login"
import { Turn as Hamburger } from "hamburger-react"

export function ButtonsHeader() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Hamburger toggled={isOpen} color="#121212" toggle={setOpen} />
      {isOpen && (
        <div className="flex items-center gap-10">
          <BtnFavorites />
          <Cart />
          <LogIn />
        </div>
      )}
    </>
  )
}
