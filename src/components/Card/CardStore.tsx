import { Link } from 'react-router-dom'
import { MapPin } from 'phosphor-react'

interface CardStoreProps {
  id: string
  name: string
  img: string
  address: string
  description: string
  slug: string
}

export function CardStore({
  address,
  description,
  id,
  img,
  name,
  slug,
}: CardStoreProps) {
  return (
    <div
      className=" mt-4 w-[95%] max-w-[370px] shadow-md rounded-xl last:mb-24 "
      key={id}
    >
      <h2 className="w-full h-12 bg-brown-900 flex items-center justify-center text-white text-xl font-bold rounded-t-xl">
        {name}
      </h2>

      <img
        alt={img}
        src={img}
        className="h-56 w-full object-cover"
        width={390}
        height={190}
      />

      <div className="mt-2 ml-[14px] grid lg:grid-rows-4 ">
        <address className="flex gap-1 text-[13px] font-semibold text-[#424242] not-italic leading-normal">
          <MapPin size={26} color="gray" />
          {address === '1' ? 'Online' : `${address}`}
        </address>

        <p className="text-[#424242] text-sm mt-[13px] max-w-[345px] font-light row-start-2 row-end-6">
          {description}
        </p>

        <Link
          to={`/${slug}`}
          className="flex justify-center items-center mt-8 mb-4"
        >
          <p className="flex justify-center items-center bg-orange-900 w-[164px] p-2 rounded-full text-[14px] font-bold uppercase tracking-widest hover:brightness-110">
            ver produtos
          </p>
        </Link>
      </div>
    </div>
  )
}
