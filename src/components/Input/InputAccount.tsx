import { InputHTMLAttributes } from 'react'
interface IDataProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string
  sizeText: string
}

export function InputAccount({ sizeText, className, ...props }: IDataProps) {
  return (
    <input
      type="submit"
      className={` ${className} rounded-3xl text-${sizeText} cursor-pointer uppercase hover:brightness-90`}
      {...props}
    />
  )
}
