import { Tab } from "@headlessui/react";
import { Note, Truck, UserCircle } from "phosphor-react";
import { Food } from "./Food";
import { Orders } from "./Orders";
import { Profile } from "./Profile";

export function Home() {
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex justify-around gap-[14px] absolute bottom-1 left-0 right-0 ">
          <div className="flex gap-20 mt-2 shadow-5xl w-full justify-center py-2">
            <Tab className="flex flex-col justify-center items-center px-2">
              <Truck size={24} className="text-gray-400" />
              <span className="text-xs text-gray-400">Food</span>
            </Tab>

            <Tab className="flex flex-col justify-center items-center px-2">
              <Note size={24} className="text-gray-400" />
              <span className="text-xs text-gray-400">Orders</span>
            </Tab>

            <Tab className="flex flex-col justify-center items-center px-2">
              <UserCircle size={24} className="text-gray-400" />
              <span className="text-xs text-gray-400">Profile</span>
            </Tab>
          </div>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <Food />
          </Tab.Panel>

          <Tab.Panel>
            <Orders />
          </Tab.Panel>

          <Tab.Panel>
            <Profile />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
