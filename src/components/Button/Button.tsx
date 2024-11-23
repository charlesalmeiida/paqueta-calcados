import Link from "next/link"
import { tv } from "tailwind-variants"

const button = tv({
  base: "text-light block max-w-[257px] font-poppins text-lg bg-linearButton uppercase rounded-sm hover:bg-linearButtonHover",
  variants: {
    size: {
      sm: "",
      base: "py-2 px-20",
    },
  },
})

interface ButtonProps {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <Link className={button({ size: "base" })} href={"/"}>
      {children}
    </Link>
  )
}
