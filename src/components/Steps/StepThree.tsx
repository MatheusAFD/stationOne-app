import { gql, useMutation, useQuery } from "@apollo/client";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface PRODUCT_INFO_PROPS {
  products: {
    id: string;
    nome: string;
    price: any;
    imgUrl: string;
  }[];
}

const GET_PRODUCT_INFO = gql`
  query MyQuery($id: ID) {
    products(where: { id: $id }) {
      nome
      price
      imgUrl
      id
    }
  }
`;

const CREATE_ORDER = gql`
  mutation MyMutation($price: Float, $quantity: Int!, $email: String, $id: ID) {
    createOrder(
      data: {
        products: { connect: { id: $id } }
        price: $price
        qtdProduct: $quantity
        userContent: { connect: { email: $email } }
      }
    ) {
      id
    }
  }
`;

export function StepThree() {
  const navigate = useNavigate();
  const id = sessionStorage.getItem("id");
  const quantity = Number(sessionStorage.getItem("quantity"));
  const { data } = useQuery<PRODUCT_INFO_PROPS>(GET_PRODUCT_INFO, {
    variables: {
      id,
    },
  });
  const [createOrder] = useMutation(CREATE_ORDER);
  const fullprice = +(data?.products[0].price * quantity).toFixed(2);

  async function handleButtonCreate(e: FormEvent) {
    await createOrder({
      variables: {
        id: id,
        price: fullprice,
        quantity: quantity,
        email: localStorage.getItem("email"),
      },
    });

    navigate("/finish-order/sucess");
  }

  return (
    <div>
      <div className="shadow mt-10 rounded w-[95%] max-w-[410px] m-auto">
        {data?.products.map((item) => {
          return (
            <div>
              <img src={item.imgUrl} alt="" />
              <div className="p-4 flex justify-around text-gray-600">
                <div>
                  <p>{item.nome}</p>
                  <p>Preço: R$ {item.price} </p>
                </div>
                <div>
                  <p>Quantidade: {quantity}</p>
                  <p>Total: R$ {fullprice}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-10 ">
        <input
          type="submit"
          value="Confirmar pedido"
          onClick={handleButtonCreate}
          className="shadow p-4 rounded text-gray-600 cursor-pointer border-2 border-orange-900 transition-colors hover:bg-orange-900 hover:text-white"
        />
      </div>
    </div>
  );
}
