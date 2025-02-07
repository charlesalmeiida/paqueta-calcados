import { Cart } from "../buttons/cart/cart"
import { BtnFavorites } from "../buttons/favorites/favorites"
import { LogIn } from "../buttons/login/login"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function ButtonsHeader() {
  return (
    <div>
      <div className="hidden md:flex items-center gap-10">
        <BtnFavorites />
        <Cart />
        <LogIn />
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="p-4">
            <SheetHeader className="hidden">
              <SheetTitle>Ações</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-8 mt-4">
              <BtnFavorites />
              <Cart />
              <LogIn />
            </div>
            <SheetClose className="absolute top-4 right-4">
              <span className="sr-only">Fechar</span>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
