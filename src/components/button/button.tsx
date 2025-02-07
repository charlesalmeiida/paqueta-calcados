import { ComponentProps } from "react"
import { tv } from "tailwind-variants"

const button = tv({
  base: "py-2 px-20 bg-linear02 rounded-sm uppercase font-poppins text-light text-lg transition-all hover:brightness-95",
  variants: {
    weight: {
      normal: "font-normal",
      bold: "font-bold",
    },
  },
})

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode
  weight?: "normal" | "bold"
}

export function Button({ children, weight = "normal" }: ButtonProps) {
  return <button className={button({ weight })}>{children}</button>
}
