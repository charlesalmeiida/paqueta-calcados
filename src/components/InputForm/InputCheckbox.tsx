interface InputCheckboxProps {
  children: React.ReactNode
}

export function InputCheckbox({children}: InputCheckboxProps) {
  return (
    <div className="flex gap-3">
      <input className="shadow-dark" type="checkbox" name="checkbox" id="checkbox" />
      <label className="font-poppins text-lg text-light" htmlFor="checkbox">
        {children}
      </label>
    </div>
  )
}
