import { formatData } from '../../common/utils/format-date'

interface CardOrderProps {
  name: string
  img: string
  quantityProduct: number
  price: number
  date: Date
}

export function CardOrder({
  date,
  img,
  name,
  price,
  quantityProduct,
}: CardOrderProps) {
  return (
    <div className="w-[95%] max-w-[410px] flex items-center mb-7 last:mb-20 lg:last:mb-7 gap-2 p-4 shadow">
      <div className="relative">
        <img src={img} alt="" className="w-24 h-24 object-cover " />
        {quantityProduct > 1 && (
          <span className="absolute bottom-0 right-0 rounded-full flex justify-center items-center w-7 h-7 bg-white shadow text-sm">
            {quantityProduct}
          </span>
        )}
      </div>
      <div>
        <p className="text-center text-gray-800 font-semibold text-lg mb-2">
          {name}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Pedido em <br /> {formatData(date)}
        </p>
        <p className="text-sm text-gray-600">
          Preço total:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </p>
      </div>
    </div>
  )
}
