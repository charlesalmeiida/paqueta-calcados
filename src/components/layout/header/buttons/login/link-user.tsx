"use client"

import Image from "next/image"
import Link from "next/link"
import { ModalLogin } from "./modal-login"
import { useState } from "react"

interface LinkUserProps {
  link: string
  user: string
  isLoggedIn: boolean
  lougOut: () => void
}

export function LinkUser({ link, user, isLoggedIn, lougOut }: LinkUserProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleModal} className="flex items-end gap-3">
          <Image
            src={"/svg/icon-login.svg"}
            width={28}
            height={28}
            alt="Ícone de login"
          />
          <span className="text-gray01 text-sm font-poppins hover:text-primary01">
            {user}
          </span>
        </button>
      ) : (
        <Link href={link} scroll={false} className="flex items-end gap-3">
          <Image
            src={"/svg/icon-login.svg"}
            width={28}
            height={28}
            alt="Ícone de login"
          />
          <span className="text-gray01 text-sm font-poppins hover:text-primary01">
            {user}
          </span>
        </Link>
      )}

      {isModalOpen && isLoggedIn && <ModalLogin logOut={lougOut} />}
    </>
  )
}
