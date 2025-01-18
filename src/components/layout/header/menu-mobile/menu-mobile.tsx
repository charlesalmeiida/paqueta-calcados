import { Cart } from "../buttons/cart/cart"
import { BtnFavorites } from "../buttons/favorites/favorites"
import { LogIn } from "../buttons/login/login"

export function MenuMobile() {
  return (
    <div className="flex container absolute top-40 items-center justify-between w-full md:gap-10">
      <BtnFavorites />
      <Cart />
      <LogIn />
    </div>
  )
}
