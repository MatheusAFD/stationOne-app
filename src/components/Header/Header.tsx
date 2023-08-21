import { Link } from 'react-router-dom'
import { ArrowLeft, GearSix } from 'phosphor-react'

interface HeaderProps {
  returnNav?: () => void
  hasIcon?: boolean
  hasBack?: boolean
  title?: string | string[]
}

export function Header({ hasBack, hasIcon, returnNav, title }: HeaderProps) {
  return (
    <header className="w-full bg-[#862924] max-h-14 h-14 shadow-4xl">
      {hasIcon && (
        <Link to="/profile/edit" className="absolute right-3 m-auto py-4">
          <GearSix
            size={24}
            color="#ffffff"
            weight="fill"
            className="cursor-pointer mr-4"
          />
        </Link>
      )}

      {hasBack && (
        <div className="flex justify-around items-center p-3 ">
          <Link to={''} onClick={returnNav} className="flex items-center">
            <ArrowLeft
              size={24}
              color="#ffffff"
              weight="bold"
              className="ml-[-2.3rem] absolute left-12"
            />
          </Link>
          <h1 className="text-white font-semibold text-xl capitalize ">
            {title}
          </h1>
          <h1></h1>
        </div>
      )}
    </header>
  )
}
