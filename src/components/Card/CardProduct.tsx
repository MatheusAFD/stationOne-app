interface CardProductProps {
  id: string
  name: string
  price: number
  description: string | undefined
  deliveryIn: string | undefined
  img: string
}

export function CardProduct({
  deliveryIn,
  description,
  id,
  img,
  name,
  price,
}: CardProductProps) {
  return (
    <div
      key={id}
      className="w-[95%] max-w-[410px] flex flex-col items-center mb-7 last:mb-24 lg:last:mb-7"
    >
      <p className="font-semibold text-sm text-[#9E9E9E] place-self-start mb-3">
        {deliveryIn}
      </p>
      <div className="w-full h-[255px] shadow rounded">
        <img
          src={img}
          alt=""
          className="h-48 w-full object-cover "
          width={350}
          height={190}
        />

        <div className="flex justify-between p-3 text-[#424242]">
          <div>
            <h3 className="text-base font-semibold">{name}</h3>
            <p className="text-sm">{description}</p>
          </div>
          <span className="text-sm place-self-start px-2 bg-orange-900 rounded-md text-white font-semibold ">
            R$ {price}
          </span>
        </div>
      </div>
    </div>
  )
}
