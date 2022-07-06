import { NavLink } from "react-router-dom";
import { MapPin } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import { LoadingCircle } from "../../components/LoadingCircle";

export function Food() {
  const GET_PRODUCTS_QUERY = gql`
    query MyQuery {
      products {
        id
        imgURL
        name
        description
        address
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_PRODUCTS_QUERY);

  if (loading) return <LoadingCircle />;
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <>
      <header className="w-full bg-[#862924] h-14 shadow-4xl"></header>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className=" w-[376px] h-10 px-6 border mt-8 rounded-full border-[#bdbdbd]"
        />
      </div>
      <section className="flex flex-col justify-center items-center rounded-full mb-24">
        {data.products.map((value) => {
          return (
            <div
              className=" mt-4 w-[376px] shadow-md rounded-xl"
              key={value.id}
            >
              <h2 className="w-full h-12 bg-brown-900 flex items-center justify-center text-white text-xl font-bold rounded-t-xl">
                {value.name}
              </h2>
              <img
                src={value.imgURL}
                alt=""
                className="h-56 w-full object-cover"
              />

              <div className="mt-2 ml-[14px]">
                <address className="flex gap-1 text-[13px] font-semibold text-[#424242] not-italic leading-normal">
                  <MapPin size={26} color="gray" />
                  {value.address == null ? "Online" : `${value.address}`}
                </address>

                <p className="text-[#424242] text-sm mt-[13px] max-w-[345px] font-light">
                  {value.description}
                </p>

                <NavLink
                  to={"/"}
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
