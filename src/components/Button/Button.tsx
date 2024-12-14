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
  href?: string
}

export function Button({
  children,
  size = "base",
  type = "primary",
  href = "/",
}: ButtonProps) {
  return (
    <Link href={href} className={button({ size, type })}>
      {children}
    </Link>
  )
}
