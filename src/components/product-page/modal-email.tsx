"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useProductStore } from "@/store/product-store"
import { Button } from "../ui/button"
import { toast } from "@/hooks/use-toast"

export function ModalEmail() {
  const { modalEmailOpen, setModalEmailOpen } = useProductStore()

  const handleSubmit = () => {
    toast({
      title: "E-mail enviado com sucesso",
    })

    setModalEmailOpen(false)
  }

  return (
    <Dialog open={modalEmailOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Produto esgotado</DialogTitle>
          <DialogDescription>
            Digite seu e-mail e nós te avisaremos quando o produto estiver
            disponível
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <Input type="email" placeholder="Digite seu e-mail" required />
          <div className="flex justify-between mt-6">
            <Button
              onClick={() => setModalEmailOpen(false)}
              variant={"outline"}
            >
              Cancelar
            </Button>
            <Button type="submit" className="bg-primary01 w-1/3">
              Enviar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
