import Link from "next/link"
import { tv } from "tailwind-variants"

const button = tv({
  base: "text-light block max-w-[257px] w-full text-center transition-all font-bold font-poppins uppercase rounded-sm ",
  variants: {
    size: {
      sm: "",
      base: "py-3",
    },
    type: {
      primary: "text-lg bg-linearButton hover:bg-linearButtonHover",
      soldOut: "text-base bg-primaryDark hover:bg-primary",
    },
  },
})

interface ButtonProps {
  children: React.ReactNode
  size?: "sm" | "base"
  type?: "primary" | "soldOut"
}

export function Button({
  children,
  size = "base",
  type = "primary",
}: ButtonProps) {
  return (
    <Link className={button({ size, type })} href={"/"}>
      {children}
    </Link>
  )
}
