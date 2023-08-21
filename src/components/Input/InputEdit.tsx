import { InputHTMLAttributes, useId } from 'react'

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  nameLabel?: string
  className?: string
}

export function InputEdit({ nameLabel, className }: IPropsInput) {
  const id = useId()

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm text-[#424242] mb-[10px]">
        {nameLabel}
      </label>

      <input
        type="email"
        id={id}
        className="border rounded-[4.5px] pl-[10px] h-10 w-[100%] "
      />
    </div>
  )
}
