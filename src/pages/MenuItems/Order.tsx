import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Header } from "../../components/Header";
import { verifyNotLogged } from "../../utils/verifyLogged";
import { formatData } from "../../utils/formatDate";

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
    orders(
      where: { userContent: { email: $email } }
      orderBy: createdAt_DESC
      stage: DRAFT
    ) {
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

export function Order() {
  const [isShowOrder, setIsShowOrder] = useState(true);
  const email = localStorage.getItem("email");
  const { data } = useQuery<GET_ORDER_BY_EMAIL>(GET_ORDER_BY_EMAIL, {
    variables: {
      email,
    },
  });

  useEffect(() => {
    if (data?.orders.length == 0) setIsShowOrder(false);
  }, [data]);

  verifyNotLogged();

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
                      <span className="absolute bottom-0 right-0 rounded-full flex justify-center items-center w-7 h-7 bg-white shadow text-sm">
                        {item.qtdProduct}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-center text-gray-800 font-semibold text-lg mb-2">
                      {item.products[0].nome}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Pedido em <br /> {formatData(item.createdAt)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Preço total:{" "}
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.price)}
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
