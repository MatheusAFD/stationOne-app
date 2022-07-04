import { NavLink } from "react-router-dom";
import Patissier from "../../assets/img/Patissier.jpg";
import CursosImg from "../../assets/img/Cursos.jpg";
import { MapPin } from "phosphor-react";

export function Food() {
  const foodCategories = {
    PATISSIER: {
      id: 1,
      name: "Patissier",
      img: Patissier,
      address: "R. Cônego Valadão, 725 - Gopouva, Garulhos - SP, 07040-000",
      description:
        "Modern take on old school Vietnamese street food. You'll love it, we promise :)",
      buttonLinkTo: "/", // /food/patissier
    },
    CURSOS_ONLINE: {
      id: 2,
      name: "Cursos online",
      img: CursosImg,
      address: "Online",
      description:
        "Artisan Sausage truck is a spot for bomb sausage made from ground pork, beef, or poultry, along with salt, special blend of spices and other flavorings and combos.  Some sausages include other ingredients for flavor. Stop by, and check for yourself!",
      buttonLinkTo: "/", // /food/cursos-online
    },
  };

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
        {Object.entries(foodCategories).map(([key, value]) => {
          return (
            <div
              className=" mt-4 w-[376px] shadow-md rounded-xl"
              key={value.id}
            >
              <h2 className="w-full h-12 bg-brown-900 flex items-center justify-center text-white text-xl font-bold rounded-t-xl">
                {value.name}
              </h2>
              <img
                src={value.img}
                alt=""
                className="h-56 w-full object-cover"
              />

              <div className="mt-2 ml-[14px]">
                <address className="flex gap-1 text-[13px] font-semibold text-[#424242] not-italic leading-normal">
                  <MapPin size={26} color="gray" />
                  {value.address}
                </address>

                <p className="text-[#424242] text-sm mt-[13px] max-w-[345px] font-light">
                  {value.description}
                </p>

                <NavLink
                  to={value.buttonLinkTo}
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
