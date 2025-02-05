"use client"

import Image from "next/image"
import Link from "next/link"
import { ModalLogin } from "./modal-login"
import { useState } from "react"

interface LinkUserProps {
  link: string
  user: string
}

export function LinkUser({ link, user }: LinkUserProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Link
        onClick={handleModal}
        href={link}
        scroll={false}
        className="flex items-end gap-3"
      >
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
      {isModalOpen && <ModalLogin />}
    </>
  )
}
