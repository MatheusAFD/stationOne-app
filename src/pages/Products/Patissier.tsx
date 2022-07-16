import { gql, useQuery } from "@apollo/client";
import { NavLink, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { LoadingCircle } from "../../components/LoadingCircle";

interface GetProductsQueryResponse {
  products: {
    id: string;
    nome: string;
    imgUrl: string;
    price: number;
    description: string;
    deliveryIn: string;
    shop: {
      imgLogoLoja: string;
    };
  }[];
}

const GET_PRODUCTS_QUERY = gql`
  query MyQuery($slug: String!) {
    products(where: { shop: { slug_ends_with: $slug } }) {
      id
      nome
      price
      imgUrl
      description
      deliveryIn
      shop {
        imgLogoLoja
      }
    }
  }
`;

export function Patissier() {
  const { slug } = useParams();
  const slugFormatted = slug?.replace("-", " ");
  const { data } = useQuery<GetProductsQueryResponse>(GET_PRODUCTS_QUERY, {
    variables: {
      slug,
    },
  });

  if (!data) {
    return <LoadingCircle />;
  }

  return (
    <>
      <Header hasBack={true} title={slugFormatted} />
      <div className="flex flex-col items-center">
        <img
          src={data.products[0].shop.imgLogoLoja}
          alt=""
          className="w-[390px] h-[190px] object-cover"
        />

        <div className="relative top-[-30px] w-[358px] h-16 bg-white rounded">
          <h2 className="text-center mt-3 font-bold text-xl capitalize text-[#424242]">
            {slugFormatted}
          </h2>
        </div>
      </div>

      <section>
        {data?.products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col items-center px-4 mb-7 last:mb-24"
            >
              <p className="font-semibold text-sm text-[#9E9E9E] place-self-start mb-3">
                {product.deliveryIn}
              </p>
              <div className="w-[362px] h-[255px] shadow rounded">
                <img
                  src={product.imgUrl}
                  alt=""
                  className="h-48 w-full object-cover "
                />

                <div className="flex justify-between p-3 text-[#424242]">
                  <div>
                    <h3 className="text-base font-semibold">{product.nome}</h3>
                    <p className="text-sm">{product.description}</p>
                  </div>
                  <span className="text-sm">R$ {product.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <div className="flex justify-around gap-3 fixed bottom-0 left-0 right-0 z-10 bg-white h-20">
        <ul className="flex gap-20 mt-2 shadow-3xl w-full justify-center py-2 items-center">
          <NavLink
            to={`/`}
            className="flex justify-center items-center bg-orange-900 w-[299px] h-9 rounded-full text-[14px] font-bold uppercase tracking-widest"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            start order
          </NavLink>
        </ul>
      </div>
    </>
  );
}
