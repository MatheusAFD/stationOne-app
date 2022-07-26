import { Header } from "../../components/Header";
import { gql, useMutation, useQuery } from "@apollo/client";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { LoadingCircle } from "../../components/LoadingCircle";

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
  const { data, loading } = useQuery<GET_ORDER_BY_EMAIL>(GET_ORDER_BY_EMAIL, {
    variables: {
      email,
    },
  });

  function formatData(date: Date) {
    const createDate = new Date(date);
    const availableDateFormatted = format(createDate, "d 'de' MMM 'de' yyy ", {
      locale: ptBR,
    });

    return availableDateFormatted;
  }

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

      {loading === true ? (
        <LoadingCircle />
      ) : (
        <>
          <div className="flex flex-col w-1/3 lg:m-auto gap-4 ">
            {data?.orders.map((item) => {
              return (
                <div className="p-4 flex lg:w-full w-[360px] gap-2 shadow last:mb-20">
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
          </div>
        </>
      )}
    </>
  );
}
