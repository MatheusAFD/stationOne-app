import { Note, Truck, UserCircle } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function TabMenu() {
  const menuItems = {
    FOOD: {
      id: 1,
      title: "Food",
      icon: <Truck size={24} className="text-gray-400" />,
      link: "/home/food",
    },
    ORDER: {
      id: 2,
      title: "Orders",
      icon: <Note size={24} className="text-gray-400" />,
      link: "/home/order",
    },
    PROFILE: {
      id: 3,
      title: "Profile",
      icon: <UserCircle size={24} className="text-gray-400" />,
      link: "/home/profile",
    },
  };
  return (
    <>
      <nav
        className="flex justify-around gap-3 fixed bottom-0 left-0 right-0 z-10 bg-white"
        type="button"
      >
        <ul className="flex gap-20 mt-2 shadow-3xl w-full justify-center py-2 ">
          {Object.entries(menuItems).map(([key, value]) => {
            return (
              <li>
                <NavLink
                  to={value.link}
                  key={value.id}
                  className={({ isActive }) => (isActive ? "link-active" : "")}
                >
                  <div className="flex flex-col justify-center items-center px-2">
                    {value.icon}
                    <span className="text-[11px] text-gray-400">
                      {value.title}
                    </span>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
