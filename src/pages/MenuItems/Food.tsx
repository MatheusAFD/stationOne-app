import { NavLink } from "react-router-dom";
import { MapPin } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import { Header } from "../../components/Header";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
interface GetFoodQueryResponse {
  shops: {
    id: string;
    imgLogoProduto: string;
    name: string;
    description: string;
    address: string;
    slug: string;
  }[];
}

const GET_FOOD_QUERY = gql`
  query MyQuery($search: String) {
    shops(where: { name_starts_with: $search }) {
      id
      imgLogoProduto
      name
      description
      address
      slug
    }
  }
`;

export function Food() {
  const [search, setSearch] = useState("");
  const { data } = useQuery<GetFoodQueryResponse>(GET_FOOD_QUERY, {
    variables: { search },
  });

  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <DebounceInput
          element="input"
          type="text"
          placeholder="Search..."
          minLength={3}
          className=" w-[376px] h-10 px-6 border mt-8 rounded-full border-[#bdbdbd]"
          debounceTimeout={500}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <section className="flex flex-col justify-center items-center rounded-full max-w-screen-lg lg:grid lg:grid-cols-2 lg:m-auto lg:mt-10 lg:place-items-start">
        {data?.shops.map((product) => {
          return (
            <div
              className=" mt-4 w-[376px] shadow-md rounded-xl last:mb-24 "
              key={product.id}
            >
              <h2 className="w-full h-12 bg-brown-900 flex items-center justify-center text-white text-xl font-bold rounded-t-xl">
                {product.name}
              </h2>

              <img
                src={product.imgLogoProduto}
                className="h-56 w-full object-cover"
                width={390}
                height={190}
              />

              <div className="mt-2 ml-[14px] grid lg:grid-rows-4 ">
                <address className="flex gap-1 text-[13px] font-semibold text-[#424242] not-italic leading-normal">
                  <MapPin size={26} color="gray" />
                  {product.address == null ? "Online" : `${product.address}`}
                </address>

                <p className="text-[#424242] text-sm mt-[13px] max-w-[345px] font-light row-start-2 row-end-6">
                  {product.description}
                </p>

                <NavLink
                  to={`/${product.slug}`}
                  className="flex justify-center items-center mt-8 mb-4"
                >
                  <p className="flex justify-center items-center bg-orange-900 w-[164px] h-9 rounded-full text-[14px] font-bold uppercase tracking-widest">
                    ver produtos
                  </p>
                </NavLink>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
