import { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Header } from "../../components/Header";

interface GET_ORDER_BY_EMAIL {
  orders: {
    price: number;
    qtdProduct: number;
    createdAt: any;
    products: {
      nome: string;
      price: number;
      imgUrl: string;
    }[];
  }[];
}

const GET_ORDER_BY_EMAIL = gql`
  query MyQuery($email: String) {
    orders(where: { userContent: { email: $email } }, orderBy: createdAt_DESC) {
      price
      qtdProduct
      createdAt
      products {
        nome
        price
        imgUrl
      }
    }
  }
`;

const PUBLISH_ORDERS = gql`
  mutation MyMutation($email: String) {
    publishManyOrders(
      to: PUBLISHED
      where: { userContent: { email: $email } }
    ) {
      count
    }
  }
`;

export function Order() {
  const [isShowOrder, setIsShowOrder] = useState(true);
  const [publishOrder] = useMutation(PUBLISH_ORDERS);

  async function handleButtonAtt() {
    await publishOrder({
      variables: {
        email: localStorage.getItem("email"),
      },
    });

    window.location.reload();
  }

  const email = localStorage.getItem("email");
  const { data } = useQuery<GET_ORDER_BY_EMAIL>(GET_ORDER_BY_EMAIL, {
    variables: {
      email,
    },
  });

  console.log(data?.orders.length);

  function formatData(date: Date) {
    const createDate = new Date(date);
    const availableDateFormatted = format(createDate, "d 'de' MMM 'de' yyy ", {
      locale: ptBR,
    });

    return availableDateFormatted;
  }

  useEffect(() => {
    if (data?.orders.length == 0) setIsShowOrder(false);
  });

  return (
    <>
      <Header />
      <div className="flex p-4 gap-4 lg:justify-center">
        <p className="py-5 text-[#757575]">My Orders</p>
        <input
          type="submit"
          value="Atualizar pedidos"
          className="p-4 shadow cursor-pointer border-2 hover:border-orange-900"
          onClick={handleButtonAtt}
        />
      </div>

      {isShowOrder === false ? (
        <span className="flex justify-center text-[#848484] font-semibold">
          No List Items
        </span>
      ) : (
        <>
          <section className="flex flex-col items-center md:flex-row md:gap-4 md:justify-center md:flex-wrap">
            {data?.orders.map((item, key) => {
              return (
                <div className="w-[95%] max-w-[410px] flex items-center mb-7 last:mb-20 lg:last:mb-7 gap-2 p-4 shadow ">
                  <div className="relative">
                    <img
                      src={item.products[0].imgUrl}
                      alt=""
                      className="w-24 h-24 object-cover "
                    />
                    {item.qtdProduct > 1 && (
                      <span className="absolute bottom-0 right-0 rounded-full flex justify-center items-center w-5 h-5 bg-white shadow text-sm">
                        {item.qtdProduct}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-center text-gray-800 font-semibold text-lg mb-2">
                      {item.products[0].nome}
                    </p>
                    <p className="text-sm text-gray-600">
                      Pedido em: {formatData(item.createdAt)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Preço total: R$ {item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
        </>
      )}
    </>
  );
}
