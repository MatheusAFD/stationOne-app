import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../../graphql/generated";
import { useGetProductInfoQuery } from "../../graphql/generated";

export function StepThree() {
  const navigate = useNavigate();
  const id = sessionStorage.getItem("id");
  const quantity = Number(sessionStorage.getItem("quantity"));
  const { data } = useGetProductInfoQuery({
    variables: {
      id,
    },
  });

  const [createOrder] = useCreateOrderMutation();
  const fullprice = +(Number(data?.products[0].price) * quantity).toFixed(2);

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
          value="Confirmar pedido."
          onClick={handleButtonCreate}
          className="shadow p-4 rounded text-gray-600 cursor-pointer border-2 bg-gray-200 border-orange-900 transition-colors hover:bg-orange-900 hover:text-white"
        />
      </div>
    </div>
  );
}
