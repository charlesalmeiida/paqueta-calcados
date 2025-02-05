import { Cart } from "../buttons/cart/cart"
import { BtnFavorites } from "../buttons/favorites/favorites"
import { LogIn } from "../buttons/login/login"

export function ButtonsHeader() {
  return (
    <div className="items-center gap-10 hidden md:flex">
      <BtnFavorites />
      <Cart />
      <LogIn />
    </div>
  )
}
