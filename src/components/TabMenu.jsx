import { Note, Truck, UserCircle } from "phosphor-react";
import { Link } from "react-router-dom";

export function TabMenu() {
  const menuItems = {
    FOOD: {
      id: 1,
      title: "Food",
      icon: <Truck size={24} className="text-gray-400" />,
      link: "/home",
    },
    ORDER: {
      id: 1,
      title: "Order",
      icon: <Note size={24} className="text-gray-400" />,
      link: "/home/order",
    },
    PROFILE: {
      id: 1,
      title: "Profile",
      icon: <UserCircle size={24} className="text-gray-400" />,
      link: "/home/profile",
    },
  };
  return (
    <>
      <div
        className="flex justify-around gap-3 absolute bottom-1 left-0 right-0"
        type="button"
      >
        <div className="flex gap-20 mt-2 shadow-5xl w-full justify-center py-2">
          {Object.entries(menuItems).map(([key, value]) => {
            return (
              <Link to={value.link} key={value.id}>
                <div className="flex flex-col justify-center items-center px-2">
                  {value.icon}
                  <span className="text-xs text-gray-400">{value.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
