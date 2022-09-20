import { useState } from "react";
import { DebounceInput } from "react-debounce-input";

import { useGetShopsQuery } from "../../graphql/generated";

import { verifyNotLogged } from "../../utils/verify-logged";

import { Header } from "../../components/Header/Header";
import { CardStore } from "../../components/Card/CardStore";

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
          className="w-[95%] max-w-[370px] h-10 px-6 border mt-6 rounded-full border-[#bdbdbd]"
          debounceTimeout={500}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <section className="flex flex-col justify-center items-center rounded-full max-w-screen-lg lg:grid lg:grid-cols-2 lg:m-auto  lg:place-items-start">
        {data?.shops.map(
          ({ name, description, id, imgLogoProduto, address, slug }) => {
            return (
              <CardStore
                key={id}
                name={name}
                address={address}
                slug={slug}
                id={id}
                img={imgLogoProduto}
                description={description}
              />
            );
          }
        )}
      </section>
    </>
  );
}
