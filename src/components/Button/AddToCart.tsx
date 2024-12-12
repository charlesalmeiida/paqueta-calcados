import { ItemStore } from "@/store/itemStore"

interface AddToCartProps {
  children: React.ReactNode
  soldout?: boolean
  product: ItemStore
  addToCart: (item: ItemStore) => void
}

export function AddToCart({
  children,
  soldout = false,
  addToCart,
  product,
}: AddToCartProps) {
  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <button
      {...(soldout ? {} : { onClick: handleAddToCart })}
      className={`text-light py-3 block max-w-[257px] w-full text-center transition-all font-bold font-poppins uppercase rounded-sm ${
        soldout
          ? "text-base bg-primaryDark hover:bg-primary"
          : "text-lg bg-linearButton hover:bg-linearButtonHover"
      }`}
    >
      {children}
    </button>
  )
}
