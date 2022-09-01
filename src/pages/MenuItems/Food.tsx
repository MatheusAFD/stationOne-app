import { NavLink, useNavigate } from "react-router-dom";
import { MapPin } from "phosphor-react";
import { Header } from "../../components/Header";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { verifyNotLogged } from "../../utils/verifyLogged";
import { useGetShopsQuery } from "../../graphql/generated";

export function Food() {
  const [search, setSearch] = useState("");
  const { data } = useGetShopsQuery({
    variables: { search },
  });

  verifyNotLogged();

  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <DebounceInput
          element="input"
          type="text"
          placeholder="Search..."
          minLength={3}
          className="w-[95%] max-w-[370px] h-10 px-6 border mt-8 rounded-full border-[#bdbdbd]"
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
              className=" mt-4 w-[95%] max-w-[370px] shadow-md rounded-xl last:mb-24 "
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
