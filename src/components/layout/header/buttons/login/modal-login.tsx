import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

interface ModalLoginProps {
  logOut: () => void
}

export function ModalLogin({ logOut }: ModalLoginProps) {
  return (
    <div className="absolute top-20 right-10 bg-light rounded-sm shadow-xl w-fit p-6">
      <Button
        onClick={logOut}
        variant="destructive"
        size={"lg"}
        className="flex items-center justify-center gap-2"
      >
        <LogOut className="w-5 h-5" />
        Sair
      </Button>
    </div>
  )
}
