interface CheckboxProps {
  children: React.ReactNode
  gender: "male" | "female"
}

export function Checkbox({ children, gender }: CheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        className="w-5 h-5 outline-none bg-light checked:bg-primary01"
        type="checkbox"
        name="checkbox"
        id={gender}
      />
      <label htmlFor={gender} className="text-light font-poppins text-lg">
        {children}
      </label>
    </div>
  )
}
