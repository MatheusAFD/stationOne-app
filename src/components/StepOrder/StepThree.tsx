import { useNavigate } from 'react-router-dom'

import {
  useCreateOrderMutation,
  useGetProductInfoQuery,
} from '../../graphql/generated'

export function StepThree() {
  const id = sessionStorage.getItem('id')
  const quantity = Number(sessionStorage.getItem('quantity'))

  const { data } = useGetProductInfoQuery({
    variables: {
      id,
    },
  })

  const navigate = useNavigate()

  const [createOrder] = useCreateOrderMutation()
  const fullprice = +(Number(data?.products[0].price) * quantity).toFixed(2)

  async function handleButtonCreate() {
    await createOrder({
      variables: {
        id,
        price: fullprice,
        quantity,
        email: localStorage.getItem('email'),
      },
      refetchQueries: ['GetOrderQuery'],
    })

    navigate('/finish-order/sucess')
  }

  return (
    <div>
      <div className="shadow mt-10 rounded w-[95%] max-w-[410px] m-auto">
        {data?.products.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.imgUrl} alt="" />
              <div className="p-4 flex justify-around text-gray-600">
                <div>
                  <p>{item.name}</p>
                  <p>Preço: R$ {item.price} </p>
                </div>
                <div>
                  <p>Quantidade: {quantity}</p>
                  <p>Total: R$ {fullprice}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center py-10 ">
        <input
          type="submit"
          value="Confirmar pedido."
          onClick={handleButtonCreate}
          className="shadow p-4 rounded text-gray-600 cursor-pointer border-2 bg-gray-100 border-orange-900 transition-colors hover:bg-orange-900 hover:text-white"
        />
      </div>
    </div>
  )
}
