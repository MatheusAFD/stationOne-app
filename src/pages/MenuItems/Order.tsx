import { gql, useMutation, useQuery } from "@apollo/client";
import { Header } from "../../components/Header";

interface GET_ORDER_BY_EMAIL {
  orders: {
    price: number;
    qtdProduct: number;
    products: {
      nome: string;
      price: number;
    }[];
  }[];
}

const GET_ORDER_BY_EMAIL = gql`
  query MyQuery($email: String) {
    orders(where: { userContent: { email: $email } }) {
      price
      qtdProduct
      products {
        nome
        price
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
  const { data } = useQuery<GET_ORDER_BY_EMAIL>(GET_ORDER_BY_EMAIL, {
    variables: {
      email,
    },
  });

  return (
    <>
      <Header />
      <div className="flex p-4 gap-4">
        <p className="py-5 text-[#757575]">My Orders</p>
        <input
          type="submit"
          value="Atualizar pedidos"
          className="p-4 shadow cursor-pointer border-2 hover:border-orange-900"
          onClick={handleButtonAtt}
        />
      </div>

      <div className="flex flex-col flex-wrap lg:flex-row ">
        {data?.orders.map((item) => {
          return (
            <div className="p-4 flex m-auto flex-col shadow w-[360px] mb-5 text-gray-600 last:mb-20 lg:last:mb-5">
              <p>{item.products[0].nome}</p>
              <p>Preço unitário: R$ {item.products[0].price}</p>
              <p>Quantidades compradas: {item.qtdProduct}</p>
              <p>Preço total: R$ {item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
