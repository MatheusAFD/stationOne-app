import { Link } from 'react-router-dom'
import { ForkKnife } from 'phosphor-react'

import { InputAccount } from '../../components/Input/InputAccount'
import HomeImg from '../../assets/img/Logo.jpg'

export function Index() {
  return (
    <>
      <div className="flex justify-center items-center mt-[107px]  ">
        <img
          src={HomeImg}
          alt=""
          className="max-h-[293px] "
          width={293}
          height={190}
        />
      </div>

      <div className="flex flex-col justify-center items-center font-semibold sans text-sm tracking-wide gap-[14px] absolute bottom-10 left-0 right-0">
        <Link to="/signup">
          <button className="`text-sm rounded-3xl cursor-pointer uppercase  bg-orange-900 w-[299px] h-9 tracking-widest shadow-3xl hover:brightness-90 flex items-center justify-center gap-3 font-bold">
            <ForkKnife size={24} weight="bold" />
            SIGN UP
          </button>
        </Link>

        <Link to="/login" className="flex ">
          <InputAccount
            value="log in"
            sizeText="sm"
            className={`border border-[#862924] text-[#862924] ')] w-[299px] h-9 tracking-widest uppercase }`}
          />
        </Link>
      </div>
    </>
  )
}
