import { useEffect, useState } from 'react'

import { Header } from '../../components/Header/Header'
import { CardOrder } from '../../components/Card/CardOrder'
import { useGetOrder } from '../../common/hooks/order/useGetOrder'

export function Order() {
  const [isShowOrder, setIsShowOrder] = useState(true)

  const { data } = useGetOrder()

  useEffect(() => {
    if (data?.orders.length === 0) setIsShowOrder(false)
  }, [data])

  return (
    <>
      <Header />
      <div className="flex p-4 gap-4 lg:justify-center">
        <p className="py-5 text-[#757575]">My Orders</p>
      </div>

      {isShowOrder === false ? (
        <span className="flex justify-center text-[#848484] font-semibold">
          No List Items
        </span>
      ) : (
        <>
          <section className="flex flex-col items-center md:flex-row md:gap-4 md:justify-center md:flex-wrap mb-10">
            {data?.orders.map(
              ({ createdAt, price, products, qtdProduct }, key) => {
                return (
                  <CardOrder
                    key={key}
                    date={createdAt}
                    img={products[0].imgUrl}
                    name={products[0].name}
                    price={price}
                    quantityProduct={qtdProduct}
                  />
                )
              },
            )}
          </section>
        </>
      )}
    </>
  )
}
