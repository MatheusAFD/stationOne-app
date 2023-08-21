import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
interface IButtonProps extends HTMLAttributes<HTMLDivElement> {
  nameStep: string
  slug: string | null | undefined
}

export function ButtonSteps({ nameStep, slug, ...props }: IButtonProps) {
  return (
    <div
      className="flex justify-around gap-3 fixed bottom-0 left-0 right-0 z-10 bg-white h-20"
      {...props}
    >
      <ul className="flex gap-20 mt-2 shadow-3xl w-full justify-center py-2 items-center">
        <Link
          to={`/food/${slug}/start-order`}
          className="flex justify-center items-center bg-orange-900 w-[299px] h-9 rounded-full text-[14px] font-bold uppercase tracking-widest hover:brightness-90"
        >
          {nameStep}
        </Link>
      </ul>
    </div>
  )
}
