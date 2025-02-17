import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import Image from "next/image"

interface ModalGuideProps {
  modalOpen: boolean
  closeModal: () => void
}

export function ModalGuide({ modalOpen, closeModal }: ModalGuideProps) {
  return (
    <Dialog open={modalOpen}>
      <DialogContent className="w-full lg:max-w-fit p-0">
        <DialogTitle className="hidden">Guia de Tamanhos</DialogTitle>
        <button onClick={closeModal} className="absolute top-4 right-4">
          <X />
        </button>
        <Image
          src={"/img/guia-de-tamanhos.png"}
          width={990}
          height={814}
          alt="Imagem de Guia de Tamanhos"
        />
      </DialogContent>
    </Dialog>
  )
}
