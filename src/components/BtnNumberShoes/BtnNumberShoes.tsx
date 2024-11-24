interface BtnNumberShoesProps {
  children: React.ReactNode
}

export function BtnNumberShoes({ children }: BtnNumberShoesProps) {
  return (
    <button className="font-poppins transition-all opacity-70 w-16 h-16 hover:bg-linearButton hover:text-light border-secondaryLight border-opacity-70 border rounded-sm text-[22px] font-medium text-center leading-8 text-secondaryLight">
      {children}
    </button>
  )
}
